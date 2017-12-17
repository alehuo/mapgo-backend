import * as fs from 'fs';
import JsonNode from './../interface/JsonNode';
import JsonEdge from './../interface/JsonEdge';
import { Edge, ArrayList, Tuple, Coordinate } from './../struct';
import { Arrays } from './../utils';
import MathUtils from './MathUtils';
import Point from '../struct/Point';
import MinMaxData from '../interface/MinMaxData';

/**
 * Graphloader.
 * @author Aleksi Huotala
 */
class GraphLoader {

    /**
     * Loads the graph from the defined JSON file.
     */
    public static loadFile(fileName: string): Tuple<ArrayList<Edge>[],
        Tuple<Coordinate[], number[]>> {

        let minX: number = Number.MAX_SAFE_INTEGER;
        let maxX: number = Number.MIN_SAFE_INTEGER;
        let minY: number = Number.MAX_SAFE_INTEGER;
        let maxY: number = Number.MIN_SAFE_INTEGER;

        console.log('Starting to load graph from %s', fileName);

        // Open handle
        let handle: any = fs.readFileSync(fileName);

        // Parse data to json
        let data: JsonNode[] = JSON.parse(handle);

        // Create adjacency list
        let adjList: ArrayList<Edge>[] = new Array<ArrayList<Edge>>(data.length);
        Arrays.fillObj(adjList, null);
        Object.seal(adjList);

        // Create coordinate list
        let coordinates: Coordinate[] = new Array<Coordinate>(data.length);
        Arrays.fillObj(coordinates, null);
        Object.seal(coordinates);

        // Fill it with stuff
        for (let i = 0; i < data.length; i++) {

            if (adjList[i] == null) {
                adjList[i] = new ArrayList<Edge>();
            }

            // Starting node
            let node: JsonNode = data[i];
            // Starting node's edges
            let edges: JsonEdge[] = node.e;

            // Add coordinate
            coordinates[i] = new Coordinate(node.la, node.lo);

            let point: Point = MathUtils.convertCoordinateToPoint(coordinates[i]);

            if (point.x < minX) {
                minX = point.x;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }

            // Loop through edges and add them to the adjacency list
            for (let j = 0; j < edges.length; j++) {
                let edge: JsonEdge = edges[j];
                adjList[i].add(new Edge(edge.i, edge.w));
            }
        }

        console.log('Loaded graph from %s with %d nodes, created adjacency list', fileName, data.length);

        // Return the adjacency list and coordinate list
        return new Tuple(adjList, new Tuple(coordinates, [minX, maxX, minY, maxY]));
    }
}

export default GraphLoader;