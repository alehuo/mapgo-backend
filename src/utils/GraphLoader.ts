import * as fs from "fs";
import JsonNode from "./../interface/JsonNode";
import { ArrayList, Coordinate, Edge, Tuple } from "./../struct";
import { Arrays } from "./../utils";
import MathUtils from "./MathUtils";

/**
 * Graphloader.
 * @author Aleksi Huotala
 */
class GraphLoader {
  /**
   * Loads the graph from the defined JSON file.
   */
  public static loadFile(fileName: string) {
    let minX = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    console.log("Starting to load graph from %s", fileName);

    // Open handle
    const handle = fs.readFileSync(fileName);

    // Parse data to json
    const data: JsonNode[] = JSON.parse(handle.toString("UTF-8"));

    // Create adjacency list
    const adjList = new Array<ArrayList<Edge>>(data.length);
    Arrays.fill(adjList, null);
    Object.seal(adjList);

    // Create coordinate list
    const coordinates = new Array<Coordinate>(data.length);
    Arrays.fill(coordinates, null);
    Object.seal(coordinates);

    // Fill it with stuff
    for (let i = 0; i < data.length; i++) {
      if (adjList[i] == null) {
        adjList[i] = new ArrayList<Edge>();
      }

      // Starting node
      const node = data[i];
      // Starting node's edges
      const edges = node.e;

      // Add coordinate
      coordinates[i] = new Coordinate(node.la, node.lo);

      const point = MathUtils.convertCoordinateToPoint(coordinates[i]);

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
        const edge = edges[j];
        adjList[i].add(new Edge(edge.i, edge.w));
      }
    }

    console.log(
      "Loaded graph from %s with %d nodes, created adjacency list",
      fileName,
      data.length,
    );

    // Return the adjacency list and coordinate list
    return new Tuple(adjList, new Tuple(coordinates, [minX, maxX, minY, maxY]));
  }
}

export default GraphLoader;
