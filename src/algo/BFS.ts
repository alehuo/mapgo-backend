import { NodeColor } from "../enum/index";
import { Algorithm, ArrayList, Coordinate, Edge, Queue } from "../struct";
import { Arrays, MathUtils, Statistics } from "../utils/index";

/**
 * BFS algorithm.
 * @author Aleksi Huotala
 */
class BFS extends Algorithm {
  /**
   * Color array.
   */
  private color: NodeColor[];

  /**
   * Distance array.
   */
  private dist: number[];

  /**
   * Tree.
   */
  private tree: number[];

  /**
   * Node count.
   */
  private nodeCount: number;

  /**
   * Queue.
   */
  private queue: Queue<number>;

  /**
   * BFS algorithm.
   * @param graph Graph.
   * @param coordList Coordinate list.
   * @param stats Statistics.
   */
  constructor(
    graph: Array<ArrayList<Edge>>,
    coordList: Coordinate[],
    stats: Statistics,
    minMaxData: number[],
  ) {
    // Super constructor call.
    super(graph, coordList, stats, minMaxData);
    this.nodeCount = graph.length;
    // Initialize color array
    this.color = new Array<NodeColor>(graph.length);
    Arrays.fill(this.color, NodeColor.WHITE);
    Object.seal(this.color);
    // Initialize distance array
    this.dist = new Array<number>(graph.length);
    Arrays.fill(this.dist, Number.MAX_SAFE_INTEGER);
    Object.seal(this.dist);
    // Initialize tree
    this.tree = new Array<number>(graph.length);
    Arrays.fill(this.tree, -1);
    Object.seal(this.tree);
    // Initialize queue
    this.queue = new Queue<number>(graph.length);
  }

  /**
   * BFS algorithm.
   * @param startingNode Starting node.
   */
  public bfs(startingNode: number) {
    this.init(startingNode);
    const graph = this.getGraph();
    this.queue.enqueue(startingNode);
    // While the queue is not empty, pop nodes
    while (!this.queue.empty()) {
      const startNode = this.queue.dequeue();
      const adjacencyNodes = graph[startNode];
      for (let i = 0; i < adjacencyNodes.size(); i++) {
        const edge = adjacencyNodes.get(i);
        const targetNode = edge.getDest();
        if (this.color[targetNode] === NodeColor.WHITE) {
          this.color[targetNode] = NodeColor.GRAY;
          this.dist[targetNode] = this.dist[startNode] + 1;
          this.tree[targetNode] = startNode;
          this.queue.enqueue(targetNode);
          this.addEdge(
            this.getCoordList()[startNode],
            this.getCoordList()[targetNode],
          );
        }
        this.color[targetNode] = NodeColor.BLACK;
      }
    }
    return this.dist;
  }

  public run(startingNode?: number): void {
    if (startingNode === null || startingNode === undefined) {
      startingNode = 0;
    } else {
      if (startingNode < 0) {
        startingNode = 0;
      }
      if (startingNode > this.nodeCount - 1) {
        startingNode = this.nodeCount - 1;
      }
    }
    const startCoords = this.getCoordList()[startingNode];
    const startingPoint = MathUtils.convertCoordinateToPoint(startCoords);
    this.setStartCoords(startingPoint);

    this.bfs(startingNode);
  }

  /**
   * Initializes data structures for BFS algorithm.
   * @param startingNode Starting node.
   */
  private init(startingNode: number): void {
    // Initialize color array
    this.color = new Array<NodeColor>(this.nodeCount);
    Arrays.fill<NodeColor>(this.color, NodeColor.WHITE);
    Object.seal(this.color);
    // Initialize distance array
    this.dist = new Array<number>(this.nodeCount);
    Arrays.fill(this.dist, Number.MAX_SAFE_INTEGER);
    Object.seal(this.dist);
    // Initialize tree
    this.tree = new Array<number>(this.nodeCount);
    Arrays.fill(this.tree, -1);
    Object.seal(this.tree);
    // Initialize queue
    this.queue = new Queue<number>(this.nodeCount);

    this.color[startingNode] = NodeColor.GRAY;
    this.dist[startingNode] = 0;
  }
}

export default BFS;
