import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import { Algorithm, ArrayList, Coordinate, Edge, Tuple } from "../src/struct";
import { Arrays, Statistics } from "../src/utils";

/**
 * Tests for Tuple class.
 * @author Aleksi Huotala
 */
@suite
class AlgorithmTest {
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

  @test public test1() {
    const data: Tuple<
      Array<ArrayList<Edge>>,
      Tuple<Coordinate[], number[]>
    > = this.init();
    let algo = new TestAlgorithm(
      data.arg1,
      data.arg2.arg1,
      new Statistics(1),
      data.arg2.arg2,
    );
    assert.equal(algo.getCoordList().length, 8);

    for (let i = 0; i < 25; i++) {
      algo.run();
    }

    assert.equal(algo.getSteps().length, 25);

    algo = new TestAlgorithm(
      data.arg1,
      data.arg2.arg1,
      new Statistics(5),
      data.arg2.arg2,
    );

    for (let i = 0; i < 25; i++) {
      algo.run();
    }

    assert.equal(algo.getSteps().length, 5);
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

class TestAlgorithm extends Algorithm {
  private i: number = 0;
  public run(): void {
    this.addEdge(
      new Coordinate(this.i, this.i),
      new Coordinate(this.i + 1, this.i + 1),
    );
    this.i++;
  }
}
