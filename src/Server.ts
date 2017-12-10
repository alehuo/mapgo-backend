import { Tuple, ArrayList, Edge, Coordinate, Step, Algorithm } from './struct';
import { GraphLoader, Statistics } from './utils';
import * as io from 'socket.io';
import { Status, AlgorithmType } from './enum/index';
import { Data, MinMaxData, AvailableAlgo } from './interface/index';
import { AStar, Dijkstra, BFS } from './algo/index';

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
    private data: Tuple<ArrayList<Edge>[],
        Coordinate[]>;

    private wsPort: number;

    constructor(wsPort: number, graphFile: string) {
        //WebSocket port
        this.wsPort = wsPort;
        // Load graph.
        this.initGraph(graphFile);
        // WebSocket
        let socket = io(wsPort, {
            origins: "*:*"
        });

        console.log('Specified ws port is %d', wsPort);

        socket.on('connection', (socket) => {
            
            let data: Data = {
                status: Status.SENDING_AVAILABLE_ALGORITHMS,
                payload: this.getAvailableAlgos()
            };
            socket.emit('algorithmList', JSON.stringify(data));

            socket.on('command', (message: string) => {
                // If we receive a message, parse it to JSON
                let msg: Data = JSON.parse(message);

                // Start calculating algo
                if (msg.status == Status.START_CALC) {

                    // Emit starting event
                    let start: Data = {
                        status: Status.CALCULATING
                    };

                    socket.emit("calculating_started", JSON.stringify(start));

                    let algo: Algorithm;

                    let stepSize: number = (msg.stepSize == undefined) ? 100 : msg.stepSize;

                    // Algorithm switching
                    switch (msg.algo) {
                        case AlgorithmType.DIJKSTRA:
                            algo = new Dijkstra(this.data.arg1, this.data.arg2, new Statistics(stepSize));
                            break;
                        case AlgorithmType.ASTAR:
                            algo = new AStar(this.data.arg1, this.data.arg2, new Statistics(stepSize));
                            break;
                        case AlgorithmType.BFS:
                            algo = new BFS(this.data.arg1, this.data.arg2, new Statistics(stepSize));
                            break;
                        default:
                            throw ("Unknown algorithm");
                    }

                    console.log('Starting to calculate map using algorithm %s', msg.algo.toString());

                    // Runs the algorithm.
                    // Defines a custom starting node number.
                    algo.run(msg.startingNode);

                    // Get the steps returned by the algorithm
                    let steps: Step[] = algo.getSteps();

                    let data2: MinMaxData = {
                        status: Status.SENDING_MIN_MAX_X_Y,
                        minX: algo.getMinX(),
                        maxX: algo.getMaxX(),
                        minY: algo.getMinY(),
                        maxY: algo.getMaxY(),
                        roadCount: algo.getRoadMaxId(),
                        startingX: algo.getStartX(),
                        startingY: algo.getStartY()
                    }

                    if (socket.emit("sending_min_max_x_y", JSON.stringify(data2))) {
                        // Send each step, step by step
                        for (let i = 0; i < steps.length; i++) {
                            let data: Data = {
                                status: Status.CALCULATING_SENDING_STEP,
                                payload: steps[i].getRoads()
                            };
                            socket.emit("calculating_sending_step", JSON.stringify(data));
                        }

                        let data: Data = {
                            status: Status.CALC_FINISHED
                        };
                        socket.emit("calculating_finished", JSON.stringify(data));
                    } else {
                        throw ("Error sending lat and lon data.");
                    }

                    console.log('Finished calculating map with algorithm %s', msg.algo.toString());
                }
            });
        });
    }

    /**
     * Loads a graph into memory.
     * @param fileName
     */
    private initGraph(fileName: string): void {
        this.data = GraphLoader.loadFile(fileName);
    }

    private getAvailableAlgos(): AvailableAlgo[] {
        return [
            {
                displayName: "Dijkstra's algorithm",
                command: AlgorithmType.DIJKSTRA
            },
            {
                displayName: "A* algorithm",
                command: AlgorithmType.ASTAR
            },
            {
                displayName: "BFS algorithm",
                command: AlgorithmType.BFS
            }
        ];
    }
}

export default Server;