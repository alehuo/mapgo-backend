import Heap from './../struct/Heap';
import Comparator from './../interface/Comparator';
import ArrayList from './../struct/ArrayList';
import Node from './../struct/Node';
import Edge from './../struct/Edge';
import NodeComparator from './../comparator/NodeComparator';

/**
 * Dijkstra's algorithm.
 * @author Aleksi Huotala
 */
class Dijkstra {

    /**
     * Distance array
     */
    private dist : number[];

    /**
     * Path array
     */
    private path : number[];

    /**
     * Number of nodes
     */
    private nodeCount : number;

    /**
     * Graph
     */
    private graph : ArrayList < Edge > [];

    /**
     * Starting node
     */
    private start : number;

    private INFINITY : number = Number.MAX_SAFE_INTEGER;

    /**
     * Dijkstra's algorithm.
     * @param graph Graph.
     */
    constructor(graph : ArrayList < Edge > []) {
        this.nodeCount = graph.length;
        this.dist = new Array < number > (this.nodeCount);
        this.path = new Array < number > (this.nodeCount);
        this.graph = graph;
    }

    /**
     * Initializes a single source.
     * @param start Starting node
     */
    private initializeSingleSource(start : number) : void {
        for(let i = 0; i < this.dist.length; i++) {
            this.dist[i] = this.INFINITY;
            this.path[i] = null;
        }
        this.dist[start] = 0;
    }

    /**
     * Calculates the shortest distances to other nodes from a starting node
     * @param start Starting node
     */
    public shortestDistances(start : number) : number[] {
        // Visited list
        let visited : boolean[] = new Array < boolean > (this.graph.length - 1);

        this.start = start;

        for (let i = 0; i < this.graph.length; i++) {
            visited[i] = false;
        }

        // Initialize single source
        this.initializeSingleSource(start);

        // Init min heap
        let minHeap : Heap < Node > = new Heap < Node > (new NodeComparator());

        // Starting node with zero weight
        minHeap.heapInsert(new Node(start, 0));

        // Start calculating shortest distances Also, when every step is done, make sure
        // we log what edges we visited as the map will be drawn based on that.
        while (!minHeap.isEmpty()) {
            let u : Node = minHeap.heapDelMin();

            for (let i = 0; i < this.graph[u.number].size(); i++) {
                // Starting
                let strt : number = u.number;
                // Destination edge, O(1) operation
                let dest : Edge = this
                    .graph[u.number]
                    .get(i);

                if (!visited[dest.getDest()]) {
                    // O(1)
                    if (this.dist[dest.getDest()] > this.dist[u.number] + dest.getWeight()) {
                        this.dist[dest.getDest()] = this.dist[u.number] + dest.getWeight();

                        // Add path
                        this.path[dest.getDest()] = u.number;

                        // Add new node
                        let tmpNode : Node = new Node(dest.getDest(), this.dist[u.number] + dest.getWeight());
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
     * Creates and returns an adjacency list.
     * @returns Adjacency list.
     */
    /*
    private createAdjacencyList() : ArrayList < number > []{
        let adjacencyList: ArrayList < number > [] = new Array < ArrayList < number >> (this.nodeCount);
        for (let i = 0; i < this.w.length; i++) {
            for (let j = 0; j < this.w[0].length; j++) {
                // If there is a path from i to j
                if (this.w[i][j] != 0) {
                    if (adjacencyList[i] == null) {
                        adjacencyList[i] = new ArrayList < number > ();
                    }
                    adjacencyList[i].add(j);
                }
            }
        }
        return adjacencyList;
    }*/
    /**
     * Writes the shortest path from start to v. Currently used ONLY for debugging
     */
    public writeShortestPath(v : number) {

        var fs = require('fs')
        var logger = fs.createWriteStream('log.txt', {flags: 'a'})

        let u : number = this.path[v];
        while (u != this.start) {
            logger.write(u + '\r\n');
            u = this.path[u];
        }
        logger.write(u + '\r\n');

    }
}

export default Dijkstra;