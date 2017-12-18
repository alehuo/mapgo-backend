import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { ArrayList, Edge, Coordinate, Tuple } from '../src/struct';
import { Statistics, Arrays } from '../src/utils';
import { BFS } from '../src/algo';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class BFSTest {

    init(): Tuple<ArrayList<Edge>[],
        Tuple<Coordinate[], number[]>> {
        let adjList: ArrayList<Edge>[] = new Array<ArrayList<Edge>>();
        this.addTwEdge(adjList, 0, 1, 1);
        this.addTwEdge(adjList, 1, 2, 1);
        this.addTwEdge(adjList, 2, 3, 1);
        this.addTwEdge(adjList, 3, 4, 1);
        this.addTwEdge(adjList, 3, 5, 1);
        this.addTwEdge(adjList, 5, 6, 1);
        this.addTwEdge(adjList, 6, 17, 1);
        this.addTwEdge(adjList, 1, 7, 1);
        this.addTwEdge(adjList, 7, 8, 1);
        this.addTwEdge(adjList, 8, 9, 1);
        this.addTwEdge(adjList, 9, 10, 1);
        this.addTwEdge(adjList, 7, 13, 1);
        this.addTwEdge(adjList, 7, 14, 1);
        this.addTwEdge(adjList, 14, 15, 1);
        this.addTwEdge(adjList, 15, 16, 1);
        this.addTwEdge(adjList, 13, 12, 1);
        this.addTwEdge(adjList, 12, 11, 1);

        let coords: Coordinate[] = new Array<Coordinate>(18);
        Arrays.fillObj(coords, new Coordinate(42, 42));

        return new Tuple<ArrayList<Edge>[], Tuple<Coordinate[], number[]>>(adjList, new Tuple(coords, [1, 2, 3, 4]));
    }

    private addTwEdge(adjList: ArrayList<Edge>[], source: number, dest: number, weight: number) {
        if (adjList[source] == null) {
            adjList[source] = new ArrayList<Edge>();
        }
        if (adjList[dest] == null) {
            adjList[dest] = new ArrayList<Edge>();
        }
        adjList[source].add(new Edge(dest, weight));
        adjList[dest].add(new Edge(source, weight));
    }

    /**
     * BFS test 1
     */
    @test test1() {
        let data: Tuple<ArrayList<Edge>[],
            Tuple<Coordinate[], number[]>> = this.init();
        let bfs: BFS = new BFS(data.arg1, data.arg2.arg1, new Statistics(10), data.arg2.arg2);

        // Calculated by hand
        let st: number[][] = [
            [0, 1, 2, 3, 4, 4, 5, 2, 3, 4, 5, 5, 4, 3, 3, 4, 5, 6],
            [1, 0, 1, 2, 3, 3, 4, 1, 2, 3, 4, 4, 3, 2, 2, 3, 4, 5],
            [2, 1, 0, 1, 2, 2, 3, 2, 3, 4, 5, 5, 4, 3, 3, 4, 5, 4],
            [3, 2, 1, 0, 1, 1, 2, 3, 4, 5, 6, 6, 5, 4, 4, 5, 6, 3],
            [4, 3, 2, 1, 0, 2, 3, 4, 5, 6, 7, 7, 6, 5, 5, 6, 7, 4],
            [4, 3, 2, 1, 2, 0, 1, 4, 5, 6, 7, 7, 6, 5, 5, 6, 7, 2],
            [5, 4, 3, 2, 3, 1, 0, 5, 6, 7, 8, 8, 7, 6, 6, 7, 8, 1],
            [2, 1, 2, 3, 4, 4, 5, 0, 1, 2, 3, 3, 2, 1, 1, 2, 3, 6],
            [3, 2, 3, 4, 5, 5, 6, 1, 0, 1, 2, 4, 3, 2, 2, 3, 4, 7],
            [4, 3, 4, 5, 6, 6, 7, 2, 1, 0, 1, 5, 4, 3, 3, 4, 5, 8],
            [5, 4, 5, 6, 7, 7, 8, 3, 2, 1, 0, 6, 5, 4, 4, 5, 6, 9],
            [5, 4, 5, 6, 7, 7, 8, 3, 4, 5, 6, 0, 1, 2, 4, 5, 6, 9],
            [4, 3, 4, 5, 6, 6, 7, 2, 3, 4, 5, 1, 0, 1, 3, 4, 5, 8],
            [3, 2, 3, 4, 5, 5, 6, 1, 2, 3, 4, 2, 1, 0, 2, 3, 4, 7],
            [3, 2, 3, 4, 5, 5, 6, 1, 2, 3, 4, 4, 3, 2, 0, 1, 2, 7],
            [4, 3, 4, 5, 6, 6, 7, 2, 3, 4, 5, 5, 4, 3, 1, 0, 1, 8],
            [5, 4, 5, 6, 7, 7, 8, 3, 4, 5, 6, 6, 5, 4, 2, 1, 0, 9],
            [6, 5, 4, 3, 4, 2, 1, 6, 7, 8, 9, 9, 8, 7, 7, 8, 9, 0]
        ];

        for (let i = 0; i < data.arg2.arg1.length; i++) {
            let distArr: number[] = bfs.bfs(i);
            for (let j = 0; j < distArr.length; j++) {
                assert.equal(st[i][j], distArr[j], "Distance from " + i + " to " + j + " should be " + st[i][j]);
            }
        }

    }

}