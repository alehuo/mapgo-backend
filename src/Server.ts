import * as Express from 'express';
import {Tuple, ArrayList, Edge, Coordinate} from './struct';
import {GraphLoader, Statistics} from './utils';
import Dijkstra from './algo/Dijkstra';

/**
 * Server.
 */
class Server {

    /**
     * Express server
     */
    private express : Express.application;

    /**
     * Graph file loaded as a Tuple.
     */
    private data : Tuple < ArrayList < Edge > [],
    Coordinate[] >;

    constructor(port : number, graphFile : string) {
        // Load graph.
        this.initGraph(graphFile);
        // Initialize express.
        this.express = Express();
        // Initialize routes.
        this.routes();
        // Start the server.
        this
            .express
            .listen(port, (err) => {
                console.log("Listening on %d", port);
            });
    }

    /**
     * Initializes the application's routes.
     */
    private routes() : void {
        this
            .express
            .get("/", (req : any, res : any) => {
                res.send("Hello world!");
            });
        this
            .express
            .get("/calc/dijkstra", (req : any, res : any) => {
                console.log('Starting to calculate shortest path using Dijksta\'s algorithm.');
                let dijkstra : Dijkstra = new Dijkstra(this.data.arg1, this.data.arg2, new Statistics(1));
                dijkstra.shortestDistances(0);
                res.send(dijkstra.getStepsAsJSON(false));
                console.log('Finished calculating shortest path using Dijksta\'s algorithm.');
            });
        this
            .express
            .get("/calc/bfs", (req : any, res : any) => {
                res.send("/*TODO*/");
            })
    }

    /**
     * Loads a graph into memory.
     * @param fileName
     */
    private initGraph(fileName : string) : void {
        console.log('Starting to load graph from %s', fileName);
        this.data = GraphLoader.loadFile(fileName);
        console.log('Successfully loaded graph from %s', fileName);
    }
}

export default Server;