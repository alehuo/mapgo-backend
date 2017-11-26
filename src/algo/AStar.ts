import { Algorithm, ArrayList, Edge, Coordinate, Heap, Node, AStarNode } from "../struct/index";
import { Statistics, Arrays, MathUtils } from "../utils/index";
import { AStarComparator } from "../comparator/index";
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

    constructor(graph: ArrayList<Edge>[], coordList: Coordinate[], stats: Statistics) {
        super(graph, coordList, stats);

        // Set node count
        this.nodeCount = graph.length;

        // Fill starting distance array.
        this.distStart = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.distStart, this.INFINITY);
        Object.seal(this.distStart);

        // Fill ending distance array
        this.distEnd = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.distEnd, this.INFINITY);
        Object.seal(this.distEnd);

        // Fill path array.
        this.path = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.path, 0);
        Object.seal(this.path);
    }

    /**
     * Initializes data structures.
     * @param start Starting node
     */
    private initialize(start: number, end: number): void {
        Arrays.fillNum(this.distStart, this.INFINITY);
        this.distStart[start] = 0;
    }

    public calculate(start: number, end: number): void {
        // Initialize
        this.initialize(start, end);
        // Visited list
        let visited: boolean[] = new Array<boolean>(this.nodeCount);
        Arrays.fillBoolean(visited, false);
        Object.seal(visited);

        // Minimum heap that takes the goal's coordinates as its argument.
        let heap: Heap<AStarNode> = new Heap<AStarNode>(new AStarComparator(this.getCoordList()[end].lat, this.getCoordList()[end].lon));

        // Insert starting node
        heap.heapInsert(new AStarNode(start, this.distStart[start]));

        while (!heap.isEmpty()) {

            let u: Node = heap.heapDelMin();

            for (let i = 0; i < this.getGraph()[u.number].size(); i++) {
                // Starting
                let strt: number = u.number;
                // Destination edge, O(1) operation
                let dest: Edge = this
                    .getGraph()[strt]
                    .get(i);

                if (!visited[dest.getDest()]) {

                    // O(1)
                    if (this.distStart[dest.getDest()] > this.distStart[strt] + dest.getWeight()) {
                        this.distStart[dest.getDest()] = this.distStart[strt] + dest.getWeight();

                        // Add path
                        this.path[dest.getDest()] = strt;

                        // Add a new edge.
                        this.addEdge(this.getCoordList()[u.number], this.getCoordList()[dest.getDest()]);

                        // Add new node
                        let tmpNode: Node = new Node(dest.getDest(), this.distStart[strt]);
                        heap.heapInsert(tmpNode);
                    }
                }
            }
            visited[u.number] = true;

        }
    }

    /**
     * Execute the algorithm.
     */
    public run(): void {
        this.calculate(0, this.nodeCount - 1);
    }

}

export default AStar;