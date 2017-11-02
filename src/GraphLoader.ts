import * as fs from 'fs';
import JsonNode from './interface/JsonNode';
import JsonEdge from './interface/JsonEdge';
import Edge from './struct/Edge';
import ArrayList from './struct/ArrayList';

/**
 * Graphloader.
 * @author Aleksi Huotala
 */
export default class GraphLoader {
    /**
     * Loads the graph from the defined JSON file.
     */
    public static loadFile(fileName : string) : ArrayList < Edge > []{
        console.log('Starting to load graph from %s', fileName);

        // Open handle
        let handle: any = fs.readFileSync(fileName);

        // Parse data to json
        let data: JsonNode[] = JSON.parse(handle);

        // Create adjacency list
        let adjList: ArrayList < Edge > [] = new Array < ArrayList < Edge >> (data.length);

        // Fill it with stuff
        for (let i = 0; i < data.length; i++) {

            // If the ArrayList is null, create one
            if (adjList[i] == null) {
                adjList[i] = new ArrayList < Edge > ();
            }

            // Starting node
            let node : JsonNode = data[i];
            // Starting node's edges
            let edges : JsonEdge[] = node.e;

            // Loop through edges and add them to the adjacency list
            for (let j = 0; j < edges.length; j++) {
                let edge : JsonEdge = edges[j];
                adjList[i].add(new Edge(edge.i, edge.w));
            }
        }

        console.log('Loaded graph from %s with %d nodes, created adjacency list', fileName, data.length);

        // Return the adjacency list
        return adjList;
    }
}