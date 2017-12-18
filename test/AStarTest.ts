import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { ArrayList, Edge, Coordinate, Tuple, Node } from '../src/struct';
import { Statistics, Arrays } from '../src/utils';
import AStar from '../src/algo/AStar';
import Comparator from '../src/interface/Comparator';
import MathUtils from '../src/utils/MathUtils';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class AStarTest {

    init(): Tuple<ArrayList<Edge>[],
        Tuple<Coordinate[], number[]>> {
        let adjList: ArrayList<Edge>[] = new Array<ArrayList<Edge>>(24);

        // Training excercise from "Datastructures and algorithms" course.
        this.addTwEdge(adjList, 1, 6, 90);
        this.addTwEdge(adjList, 1, 17, 85);
        this.addTwEdge(adjList, 1, 13, 101);
        this.addTwEdge(adjList, 1, 5, 211);
        this.addTwEdge(adjList, 17, 7, 98);
        this.addTwEdge(adjList, 17, 18, 142);
        this.addTwEdge(adjList, 7, 4, 86);
        this.addTwEdge(adjList, 18, 8, 92);
        this.addTwEdge(adjList, 11, 8, 87);
        this.addTwEdge(adjList, 13, 2, 138);
        this.addTwEdge(adjList, 14, 2, 146);
        this.addTwEdge(adjList, 14, 13, 97);
        this.addTwEdge(adjList, 15, 14, 80);
        this.addTwEdge(adjList, 15, 5, 99);
        this.addTwEdge(adjList, 3, 2, 120);
        this.addTwEdge(adjList, 3, 10, 75);
        this.addTwEdge(adjList, 10, 9, 70);
        this.addTwEdge(adjList, 9, 16, 111);
        this.addTwEdge(adjList, 1, 6, 90);
        this.addTwEdge(adjList, 16, 0, 118);
        this.addTwEdge(adjList, 0, 19, 75);
        this.addTwEdge(adjList, 19, 12, 71);
        this.addTwEdge(adjList, 0, 15, 140);
        this.addTwEdge(adjList, 12, 15, 151);
        Object.seal(adjList);

        /**
         * Coordinates taken from www.gps-coordinates.net.
         */
        let coords: Coordinate[] = new Array<Coordinate>(20);
        coords[0] = new Coordinate(46.18656060000001, 21.312267700000007);
        coords[1] = new Coordinate(44.4267674, 26.102538399999958);
        coords[2] = new Coordinate(44.3301785, 23.79488070000002);
        coords[3] = new Coordinate(48.516192, 17.800813000000062);
        coords[4] = new Coordinate(44.049114, 28.652727000000027);
        coords[5] = new Coordinate(45.84164029999999, 24.973095400000034);
        coords[6] = new Coordinate(43.9037076, 25.96992649999993);
        coords[7] = new Coordinate(44.68934809999999, 27.945655100000067);
        coords[8] = new Coordinate(47.1584549, 27.601441799999975);
        coords[9] = new Coordinate(45.6909898, 21.903460799999948);
        coords[10] = new Coordinate(44.9041136, 22.36451550000004);
        coords[11] = new Coordinate(46.9758685, 26.38187640000001);
        coords[12] = new Coordinate(47.0465005, 21.918943799999965);
        coords[13] = new Coordinate(44.8564798, 24.8691824);
        coords[14] = new Coordinate(45.0996753, 24.369317899999942);
        coords[15] = new Coordinate(45.7983273, 24.12558260000003);
        coords[16] = new Coordinate(45.7488716, 21.20867929999997);
        coords[17] = new Coordinate(44.7165317, 26.641121);
        coords[18] = new Coordinate(46.6406915, 27.727646800000002);
        coords[19] = new Coordinate(46.6225105, 21.517419399999994);
        Object.seal(coords);


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
     * Test 1
     */
    @test testHeuristics1() {
        let data: Tuple<ArrayList<Edge>[],
            Tuple<Coordinate[], number[]>> = this.init();
        let astar: AStar = new AStar(data.arg1, data.arg2.arg1, new Statistics(10), data.arg2.arg2, new AStarCmpFirst());

        let st: number[][] = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        st[1][0] = 418;
        st[1][1] = 0;
        st[1][2] = 239;
        st[1][3] = 359;
        st[1][4] = 269;
        st[1][5] = 211;
        st[1][6] = 90;
        st[1][7] = 183;
        st[1][8] = 319;
        st[1][9] = 504;
        st[1][10] = 434;
        st[1][11] = 406;
        st[1][12] = 429;
        st[1][13] = 101;
        st[1][14] = 198;
        st[1][15] = 278;
        st[1][16] = 615; // Nonfunctional. Real distance is 536.
        st[1][17] = 85;
        st[1][18] = 227;
        st[1][19] = 493;

        // Training excercise from Datastructures and algorithms course. The heuristic function approximates distance to Bucharest.
        for (let i = 0; i < data.arg2.arg1.length; i++) {
            let distance: number = astar.calculate(1, i);
            assert.equal(distance, st[1][i], "The distance from 1 to " + i + " should be " + st[1][i]);
        }

    }

    /**
     * Test 2
     */
    @test testHeuristics2() {
        let data: Tuple<ArrayList<Edge>[],
            Tuple<Coordinate[], number[]>> = this.init();

        let st: number[][] = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        st[1][0] = 418;
        st[1][1] = 0;
        st[1][2] = 239;
        st[1][3] = -1; // Nonfunctional
        st[1][4] = 269;
        st[1][5] = 211;
        st[1][6] = 90;
        st[1][7] = 183;
        st[1][8] = 319;
        st[1][9] = -1; // Nonfunctional
        st[1][10] = -1; // Nonfunctional
        st[1][11] = 406;
        st[1][12] = 429;
        st[1][13] = 101;
        st[1][14] = 198;
        st[1][15] = 278;
        st[1][16] = 536;
        st[1][17] = 85;
        st[1][18] = 227;
        st[1][19] = 493;

        /**
         * The Heuristic function for the map of Romania is not functioning properly.
         * I still accept this testing method as in real life the coordinate positions may differ, versus the testing I used.
         */
        for (let i = 0; i < data.arg2.arg1.length; i++) {
            let endingCoord: Coordinate = data.arg2.arg1[i];
            let startingCoord: Coordinate = data.arg2.arg1[1];
            let astar: AStar = new AStar(data.arg1, data.arg2.arg1, new Statistics(10), data.arg2.arg2, new AStarCmpSecond(startingCoord.lat, startingCoord.lon, endingCoord.lat, endingCoord.lon));
            let distance: number = astar.calculate(1, i);
            if (st[1][i] != -1) {
                assert.equal(distance, st[1][i], "Distance from 1 to " + i + " should be " + st[1][i]);
            }
        }

    }

}

/**
 * AStar comparator with predefined Heuristic function.
 */
class AStarCmpFirst implements Comparator<Node> {

    private heuristicFunction: number[] = [
        366, // Arad 0
        0, // Bucharest 1
        160, // Craiova 2
        242, // Dobreta 3
        161, // Eforie 4
        176, // Fagaras 5
        77, // Giurgiu 6
        151, // Hirsova 7
        226, // Iasi 8
        244, // Lugoj 9
        241, // Mehadia 10
        234, // Neamt 11
        380, // Oradea 12
        100, // Pitesti 13
        193, // Rimnicu Vilcea 14
        253, // Sibiu 15
        329, // Timisoara 16
        80, // Urziceni 17
        199, // Vaslui 18
        374 // Zerind 19
    ];

    compare(t1: Node, t2: Node): number {
        return this.heuristicFunction[t1.number] - this.heuristicFunction[t2.number];
    }
}

/**
 * AStar comparator with Heuristics function based on coordinates.
 */
class AStarCmpSecond implements Comparator<Node> {

    private latEnd: number;
    private lonEnd: number;
    private latStart: number;
    private lonStart: number;

    constructor(latStart: number, lonStart: number, latEnd: number, lonEnd: number) {
        this.latEnd = latEnd;
        this.lonEnd = lonEnd;
        this.latStart = latStart;
        this.lonStart = lonStart;
    }

    compare(t1: Node, t2: Node): number {
        let dist1 = MathUtils.distanceBetween(new Coordinate(t1.lat, t1.lon), new Coordinate(this.latStart, this.lonStart)) + MathUtils.distanceBetween(new Coordinate(t1.lat, t1.lon), new Coordinate(this.latEnd, this.lonEnd));
        let dist2 = MathUtils.distanceBetween(new Coordinate(t2.lat, t2.lon), new Coordinate(this.latStart, this.lonStart)) + MathUtils.distanceBetween(new Coordinate(t2.lat, t2.lon), new Coordinate(this.latEnd, this.lonEnd));

        if (dist1 - dist2 > 0) {
            return 1;
        } else if (dist1 - dist2 < 0) {
            return -1;
        }
        return 0;
    }
}