import io from "socket.io";
import { AStar, BFS, Dijkstra } from "./algo/index";
import AStarComparator from "./comparator/AStarComparator";
import { AlgorithmType, Status } from "./enum/index";
import { AvailableAlgo, Data, MinMaxData } from "./interface/index";
import { Algorithm, ArrayList, Coordinate, Edge, Step, Tuple } from "./struct";
import { GraphLoader, Statistics } from "./utils";

/**
 * Server.
 */
class Server {
  /**
   * WebSocket
   */
  private ws: any;

  /**
   * Graph file loaded as a Tuple.
   */
  private data: Tuple<Array<ArrayList<Edge>>, Tuple<Coordinate[], number[]>>;

  private wsPort: number;

  constructor(wsPort: number, graphFile: string) {
    // WebSocket port
    this.wsPort = wsPort;
    // Load graph.
    this.initGraph(graphFile);
    // WebSocket
    const socket = io(wsPort, {
      origins: "*:*",
    });

    console.log("Specified ws port is %d", wsPort);

    socket.on("connection", (connection) => {
      const data: Data = {
        status: Status.SENDING_AVAILABLE_ALGORITHMS,
        payload: this.getAvailableAlgos(),
      };
      connection.emit("algorithmList", JSON.stringify(data));

      connection.on("command", (message: string) => {
        // If we receive a message, parse it to JSON
        const msg: Data = JSON.parse(message);

        // Start calculating algo
        if (msg.status === Status.START_CALC) {
          // Emit starting event
          const start: Data = {
            status: Status.CALCULATING,
          };

          connection.emit("calculating_started", JSON.stringify(start));

          let algo: Algorithm;

          const stepSize = msg.stepSize === undefined ? 100 : msg.stepSize;

          // Algorithm switching
          switch (msg.algo) {
            case AlgorithmType.DIJKSTRA:
              algo = new Dijkstra(
                this.data.arg1,
                this.data.arg2.arg1,
                new Statistics(stepSize),
                this.data.arg2.arg2,
              );
              break;
            case AlgorithmType.ASTAR:
              algo = new AStar(
                this.data.arg1,
                this.data.arg2.arg1,
                new Statistics(stepSize),
                this.data.arg2.arg2,
                new AStarComparator(
                  this.data.arg2.arg1[msg.startingNode].lat,
                  this.data.arg2.arg1[msg.endingNode].lon,
                  this.data.arg2.arg1[msg.endingNode].lat,
                  this.data.arg2.arg1[msg.endingNode].lon,
                ),
              );
              break;
            case AlgorithmType.BFS:
              algo = new BFS(
                this.data.arg1,
                this.data.arg2.arg1,
                new Statistics(stepSize),
                this.data.arg2.arg2,
              );
              break;
            default:
              throw new Error("Unknown algorithm");
          }

          console.log(
            "Starting to calculate map using algorithm %s",
            msg.algo.toString(),
          );

          // Runs the algorithm.
          // Defines a custom starting node number.
          algo.run(msg.startingNode, msg.endingNode);

          // Get the steps returned by the algorithm
          const steps = algo.getSteps();

          const data2: MinMaxData = {
            status: Status.SENDING_MIN_MAX_X_Y,
            minX: algo.getMinX(),
            maxX: algo.getMaxX(),
            minY: algo.getMinY(),
            maxY: algo.getMaxY(),
            roadCount: algo.getRoadMaxId(),
            startingX: algo.getStartX(),
            startingY: algo.getStartY(),
          };

          if (
            msg.algo === AlgorithmType.ASTAR ||
            msg.algo === AlgorithmType.DIJKSTRA
          ) {
            data2.endingX = algo.getEndX();
            data2.endingY = algo.getEndY();
          }

          if (connection.emit("sending_min_max_x_y", JSON.stringify(data2))) {
            // Send each step, step by step
            for (let i = 0; i < steps.length; i++) {
              const data: Data = {
                status: Status.CALCULATING_SENDING_STEP,
                payload: steps[i].getRoads(),
              };
              connection.emit("calculating_sending_step", JSON.stringify(data));
            }

            const data: Data = {
              status: Status.CALC_FINISHED,
            };
            connection.emit("calculating_finished", JSON.stringify(data));
          } else {
            throw new Error("Error sending lat and lon data.");
          }

          console.log(
            "Finished calculating map with algorithm %s",
            msg.algo.toString(),
          );
        }
      });
    });
  }

  /**
   * Loads a graph into memory.
   * @param fileName
   */
  private initGraph(fileName: string) {
    this.data = GraphLoader.loadFile(fileName);
  }

  private getAvailableAlgos(): AvailableAlgo[] {
    return [
      {
        displayName: "Dijkstra's algorithm",
        command: AlgorithmType.DIJKSTRA,
      },
      {
        displayName: "A* algorithm",
        command: AlgorithmType.ASTAR,
      },
      {
        displayName: "BFS algorithm",
        command: AlgorithmType.BFS,
      },
    ];
  }
}

export default Server;
