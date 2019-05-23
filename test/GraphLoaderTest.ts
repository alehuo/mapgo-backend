import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import { ArrayList, Coordinate, Edge, Tuple } from "../src/struct";
import { Arrays, GraphLoader } from "../src/utils";

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite
class GraphLoaderTest {
  @test public fileLoading() {
    const data = GraphLoader.loadFile(__dirname + "/testGraph.json");

    const coords = [new Coordinate(1, 1), new Coordinate(2, 2)];
    const adjacencyList = new Array<ArrayList<Edge>>(2);
    Arrays.fillObj(adjacencyList, new ArrayList<Edge>(1));
    Object.seal(adjacencyList);
    adjacencyList[0].add(new Edge(1, 10));
    adjacencyList[1].add(new Edge(0, 15));

    for (let i = 0; i < coords.length; i++) {
      assert.equal(
        coords[i].lat,
        i + 1,
        "Coordinate latitude should be " + (i + 1) + ".",
      );
      assert.equal(
        coords[i].lon,
        i + 1,
        "Coordinate latitude should be " + (i + 1) + ".",
      );
    }
  }
}
