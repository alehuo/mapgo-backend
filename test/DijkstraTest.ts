import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import Dijkstra from "../src/algo/Dijkstra";
import { ArrayList, Coordinate, Edge, Tuple } from "../src/struct";
import { Arrays, Statistics } from "../src/utils";

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite
class DijkstraTest {
  public init() {
    const adjList = new Array<ArrayList<Edge>>(8);
    Arrays.fillObj(adjList, null);
    Object.seal(adjList);
    this.addTwEdge(adjList, 0, 1, 5);
    this.addTwEdge(adjList, 0, 2, 8);
    this.addTwEdge(adjList, 0, 4, 3);
    this.addTwEdge(adjList, 1, 3, 6);
    this.addTwEdge(adjList, 1, 6, 6);
    this.addTwEdge(adjList, 1, 5, 5);
    this.addTwEdge(adjList, 3, 5, 4);
    this.addTwEdge(adjList, 0, 1, 5);
    this.addTwEdge(adjList, 2, 6, 1);
    this.addTwEdge(adjList, 0, 1, 5);
    this.addTwEdge(adjList, 2, 5, 9);
    this.addTwEdge(adjList, 4, 6, 9);
    this.addTwEdge(adjList, 4, 7, 2);
    this.addTwEdge(adjList, 6, 7, 9);

    const coords = new Array<Coordinate>(8);
    Arrays.fillObj(coords, new Coordinate(42, 42));
    Object.seal(coords);

    return new Tuple<Array<ArrayList<Edge>>, Tuple<Coordinate[], number[]>>(
      adjList,
      new Tuple(coords, [1, 2, 3, 4]),
    );
  }

  /**
   * Small test 1
   */
  @test public small1() {
    const data = this.init();
    const dijkstra = new Dijkstra(
      data.arg1,
      data.arg2.arg1,
      new Statistics(10),
      data.arg2.arg2,
    );

    const shortestDistances = [
      [0, 5, 8, 11, 3, 10, 9, 5],
      [5, 0, 7, 6, 8, 5, 6, 10],
      [8, 7, 0, 13, 10, 9, 1, 10],
      [11, 6, 13, 0, 14, 4, 12, 16],
      [3, 8, 10, 14, 0, 13, 9, 2],
      [10, 5, 9, 4, 13, 0, 10, 15],
      [9, 6, 1, 12, 9, 10, 0, 9],
      [5, 10, 10, 16, 2, 15, 9, 0],
    ];

    for (let i = 0; i < 8; i++) {
      const distArr = dijkstra.shortestDistances(i, data.arg1.length);
      for (let j = 0; j < 8; j++) {
        assert.equal(
          distArr[j],
          shortestDistances[i][j],
          distArr[j] + " should be " + shortestDistances[i][j],
        );
      }
    }
  }

  private addTwEdge(
    adjList: Array<ArrayList<Edge>>,
    source: number,
    dest: number,
    weight: number,
  ) {
    if (adjList[source] == null) {
      adjList[source] = new ArrayList<Edge>();
    }
    if (adjList[dest] == null) {
      adjList[dest] = new ArrayList<Edge>();
    }
    adjList[source].add(new Edge(dest, weight));
    adjList[dest].add(new Edge(source, weight));
  }
}
