import {suite, test, slow, timeout} from 'mocha-typescript';
import * as assert from 'assert';
import {GraphLoader, Arrays} from '../src/utils';
import {ArrayList, Tuple, Edge, Coordinate} from '../src/struct';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class GraphLoaderTest {
    @test fileLoading() {
        let data : Tuple < ArrayList < Edge > [],
            Coordinate[] > = GraphLoader.loadFile(__dirname + '/../../test/testGraph.json');
        console.log(data.arg2);
        let coords : Coordinate[] = [
            new Coordinate(1, 1),
            new Coordinate(2, 2)
        ];
        let adjacencyList : ArrayList < Edge > [] = new Array < ArrayList < Edge >> (2);
        Arrays.fillObj(adjacencyList, new ArrayList < Edge > (1));
        Object.seal(adjacencyList);
        adjacencyList[0].add(new Edge(1, 10));
        adjacencyList[1].add(new Edge(0, 15));

        for (let i = 0; i < coords.length; i++) {
            assert.equal(i + 1, coords[i].lat, "Coordinate latitude should be " + (i + 1) + ".");
            assert.equal(i + 1, coords[i].lon, "Coordinate latitude should be " + (i + 1) + ".");
        }

        // TODO: Check adjacency list
    }
}