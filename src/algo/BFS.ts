import { Algorithm, ArrayList, Edge, Coordinate, Queue, Point } from '../struct';
import { Statistics, Arrays, MathUtils } from '../utils/index';
import { NodeColor } from '../enum/index';

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
    constructor(graph: ArrayList<Edge>[], coordList: Coordinate[], stats: Statistics) {
        // Super constructor call.
        super(graph, coordList, stats);
        this.nodeCount = graph.length;
        // Initialize color array
        this.color = new Array<NodeColor>(graph.length);
        Arrays.fillObj(this.color, NodeColor.WHITE);
        Object.seal(this.color);
        // Initialize distance array
        this.dist = new Array<number>(graph.length);
        Arrays.fillNum(this.dist, Number.MAX_SAFE_INTEGER);
        Object.seal(this.dist);
        // Initialize tree
        this.tree = new Array<number>(graph.length);
        Arrays.fillNum(this.tree, -1);
        Object.seal(this.tree);
        // Initialize queue
        this.queue = new Queue<number>(graph.length);
    }

    /**
     * BFS algorithm.
     * @param startingNode Starting node.
     */
    public bfs(startingNode: number): number[] {
        this.init(startingNode);
        let graph: ArrayList<Edge>[] = this.getGraph();
        this.queue.enqueue(startingNode);
        // While the queue is not empty, pop nodes
        while (!this.queue.empty()) {
            let startNode: number = this.queue.dequeue();
            let adjacencyNodes: ArrayList<Edge> = graph[startNode];
            for (let i = 0; i < adjacencyNodes.size(); i++) {
                let edge: Edge = adjacencyNodes.get(i);
                let targetNode: number = edge.getDest();
                if (this.color[targetNode] == NodeColor.WHITE) {
                    this.color[targetNode] = NodeColor.GRAY;
                    this.dist[targetNode] = this.dist[startNode] + 1;
                    this.tree[targetNode] = startNode;
                    this.queue.enqueue(targetNode);
                    this.addEdge(this.getCoordList()[startNode], this.getCoordList()[targetNode]);
                }
                this.color[targetNode] = NodeColor.BLACK;
            }
        }
        return this.dist;
    }

    /**
     * Initializes data structures for BFS algorithm.
     * @param startingNode Starting node.
     */
    private init(startingNode: number): void {
        // Initialize color array
        this.color = new Array<NodeColor>(this.nodeCount);
        Arrays.fillObj(this.color, NodeColor.WHITE);
        Object.seal(this.color);
        // Initialize distance array
        this.dist = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.dist, Number.MAX_SAFE_INTEGER);
        Object.seal(this.dist);
        // Initialize tree
        this.tree = new Array<number>(this.nodeCount);
        Arrays.fillNum(this.tree, -1);
        Object.seal(this.tree);
        // Initialize queue
        this.queue = new Queue<number>(this.nodeCount);

        this.color[startingNode] = NodeColor.GRAY;
        this.dist[startingNode] = 0;
    }

    public run(startingNode?: number): void {
        if (startingNode == null || startingNode === undefined) {
            startingNode = 0;
        }
        let startCoords: Coordinate = this.getCoordList()[startingNode];
        let startingPoint: Point = MathUtils.convertCoordinateToPoint(startCoords);
        this.setStartCoords(startingPoint);
        
        this.bfs(startingNode);
    }

}

export default BFS;