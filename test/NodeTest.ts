import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { Node } from '../src/struct/index';

/**
 * Tests for Node class.
 * @author Aleksi Huotala
 */
@suite class NodeTest {

    @test testGettersAndSetters() {
        let index: number = 0;
        let weight: number = 555;
        let node: Node = new Node(index, weight);
        assert.equal(node.number, index);
        assert.equal(node.weight, weight);

        let lat: number = -60.123456;
        let lon: number = 24.556677;
        node.lat = lat;
        node.lon = lon;

        assert.equal(node.lat, lat);
        assert.equal(node.lon, lon);
    }
}