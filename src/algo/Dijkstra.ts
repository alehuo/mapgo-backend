import {
    Heap,
    ArrayList,
    Node,
    Edge,
    Coordinate,
    Step,
    Algorithm,
    Point
} from './../struct';
import { Arrays, Statistics, MathUtils } from '../utils';
import NodeComparator from './../comparator/NodeComparator';
import { Algo } from '../interface/index';

/**
 * Dijkstra's algorithm.
 * @author Aleksi Huotala
 */
class Dijkstra extends Algorithm {

    /**
     * Distance array
     */
    private dist: number[];

    /**
     * Path array
     */
    private path: number[];

    /**
     * Number of nodes
     */
    private nodeCount: number;

    /**
     * Dijkstra's algorithm.
     * @param graph Graph.
     * @param coordList Coordinate list.
     * @param stats Statistics.
     */
    constructor(graph: ArrayList<Edge>[], coordList: Coordinate[], stats: Statistics, minMaxData: number[]) {
        // Super constructor call.
        super(graph, coordList, stats, minMaxData);

        // Set node count
        this.nodeCount = graph.length;

        // Fill distance array.
        this.dist = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.dist, this.INFINITY);
        Object.seal(this.dist);
        // Fill path array.
        this.path = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.path, 0);
        Object.seal(this.path);
    }

    /**
     * Initializes a single source.
     * @param start Starting node
     */
    private initializeSingleSource(start: number): void {
        Arrays.fillNum(this.dist, this.INFINITY);
        Arrays.fillNum(this.path, 0);
        this.dist[start] = 0;
    }

    /**
     * Calculates the shortest distances to other nodes from a starting node
     * @param start Starting node
     */
    public shortestDistances(start: number, end: number): number[] {

        // Visited list
        let visited: boolean[] = new Array<boolean>(this.getGraph().length);
        Arrays.fillBoolean(visited, false);
        Object.seal(visited);

        // Initialize single source
        this.initializeSingleSource(start);
        this.resetSteps();

        // Init min heap
        let minHeap: Heap<Node> = new Heap<Node>(new NodeComparator());

        // Starting node with zero weight
        minHeap.heapInsert(new Node(start, 0));

        // Start calculating shortest distances Also, when every step is done, make sure
        // we log what edges we visited as the map will be drawn based on that.
        while (!minHeap.isEmpty()) {

            let u: Node = minHeap.heapDelMin();

            if (visited[end]) {
                break;
            }

            for (let i = 0; i < this.getGraph()[u.number].size(); i++) {
                // Starting
                let strt: number = u.number;
                // Destination edge, O(1) operation
                let dest: Edge = this
                    .getGraph()[strt]
                    .get(i);

                if (!visited[dest.getDest()]) {

                    // O(1)
                    if (this.dist[dest.getDest()] > this.dist[strt] + dest.getWeight()) {
                        this.dist[dest.getDest()] = this.dist[strt] + dest.getWeight();

                        // Add path
                        this.path[dest.getDest()] = strt;

                        // Add a new edge.
                        this.addEdge(this.getCoordList()[u.number], this.getCoordList()[dest.getDest()]);

                        // Add new node
                        let tmpNode: Node = new Node(dest.getDest(), this.dist[strt] + dest.getWeight());
                        minHeap.heapInsert(tmpNode);
                    }
                }
            }
            visited[u.number] = true;


        }
        // Return the table
        return this.dist;
    }

    /**
     * Execute the algorithm.
     */
    public run(startingNode?: number, endingNode?: number): void {
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

        let startCoords: Coordinate = this.getCoordList()[startingNode];
        let startingPoint: Point = MathUtils.convertCoordinateToPoint(startCoords);
        let endCoords: Coordinate = this.getCoordList()[endingNode];
        let endingPoint: Point = MathUtils.convertCoordinateToPoint(endCoords);
        this.setStartCoords(startingPoint);
        this.setEndCoords(endingPoint);

        // Calculate shortest distances from the starting node.
        this.shortestDistances(startingNode, endingNode);
    }
}

export default Dijkstra;