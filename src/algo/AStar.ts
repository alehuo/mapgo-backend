import Comparator from "../interface/Comparator";
import {
  Algorithm,
  ArrayList,
  AStarNode,
  Coordinate,
  Edge,
  Heap,
  Node,
  Point,
} from "../struct/index";
import { Arrays, MathUtils, Statistics } from "../utils/index";

/**
 * A* algorithm.
 * @author Aleksi Huotala
 */
class AStar extends Algorithm {
  /**
   * Distance starting array
   */
  private distStart: number[];

  /**
   * Distance ending array
   */
  private distEnd: number[];

  /**
   * Path array
   */
  private path: number[];

  /**
   * Number of nodes
   */
  private nodeCount: number;

  /**
   * Comparator.
   */
  private comparator: Comparator<Node>;

  constructor(
    graph: Array<ArrayList<Edge>>,
    coordList: Coordinate[],
    stats: Statistics,
    minMaxData: number[],
    comparator: Comparator<Node>,
  ) {
    super(graph, coordList, stats, minMaxData);

    // Set node count
    this.nodeCount = graph.length;

    // Comparator
    this.comparator = comparator;

    // Fill starting distance array.
    this.distStart = new Array<number>(this.nodeCount);
    Arrays.fill(this.distStart, this.INFINITY);
    Object.seal(this.distStart);

    // Fill ending distance array
    this.distEnd = new Array<number>(this.nodeCount);
    Arrays.fill(this.distEnd, this.INFINITY);
    Object.seal(this.distEnd);

    // Fill path array.
    this.path = new Array<number>(this.nodeCount);
    Arrays.fill(this.path, 0);
    Object.seal(this.path);
  }

  public calculate(start: number, end: number) {
    // Initialize
    this.initialize(start, end);
    // Visited list
    const visited = new Array<boolean>(this.nodeCount);
    Arrays.fill(visited, false);
    Object.seal(visited);

    // Minimum heap that takes the goal's coordinates as its argument.
    const heap = new Heap<AStarNode>(this.comparator);

    // Insert starting node
    heap.heapInsert(new AStarNode(start, this.distStart[start]));

    while (!heap.isEmpty()) {
      const u = heap.heapDelMin();

      if (u.number === end) {
        break;
      }

      for (let i = 0; i < this.getGraph()[u.number].size(); i++) {
        // Starting
        const strt = u.number;
        // Destination edge, O(1) operation
        const dest = this.getGraph()[strt].get(i);

        if (!visited[dest.getDest()]) {
          // O(1)
          if (
            this.distStart[dest.getDest()] >
            this.distStart[strt] + dest.getWeight()
          ) {
            this.distStart[dest.getDest()] =
              this.distStart[strt] + dest.getWeight();

            // Add path
            this.path[dest.getDest()] = strt;

            // Add a new edge.
            this.addEdge(
              this.getCoordList()[u.number],
              this.getCoordList()[dest.getDest()],
            );

            // Add new node
            const tmpNode = new Node(dest.getDest(), this.getCoordList[strt]);
            tmpNode.lat = this.getCoordList()[dest.getDest()].lat;
            tmpNode.lon = this.getCoordList()[dest.getDest()].lon;
            heap.heapInsert(tmpNode);
          }
        }
      }
      visited[u.number] = true;
    }
    return this.distStart[end];
  }

  /**
   * Execute the algorithm.
   */
  public run(startingNode?: number, endingNode?: number) {
    if (startingNode == null || startingNode === undefined) {
      startingNode = 0;
    } else {
      if (startingNode < 0) {
        startingNode = 0;
      }
      if (startingNode > this.nodeCount - 1) {
        startingNode = this.nodeCount - 1;
      }
    }

    if (endingNode == null || endingNode === undefined) {
      endingNode = this.nodeCount - 1;
    } else {
      if (endingNode > this.nodeCount - 1) {
        endingNode = this.nodeCount - 1;
      }

      if (endingNode < 0) {
        endingNode = 0;
      }
    }

    const startCoords = this.getCoordList()[startingNode];
    const startingPoint = MathUtils.convertCoordinateToPoint(startCoords);
    const endCoords = this.getCoordList()[endingNode];
    const endingPoint = MathUtils.convertCoordinateToPoint(endCoords);
    this.setStartCoords(startingPoint);
    this.setEndCoords(endingPoint);

    this.calculate(startingNode, endingNode);
  }

  /**
   * Initializes data structures.
   * @param start Starting node
   */
  private initialize(start: number, end: number) {
    Arrays.fill(this.distStart, this.INFINITY);
    Arrays.fill(this.path, 0);
    this.distStart[start] = 0;
  }
}

export default AStar;
