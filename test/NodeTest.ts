import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import { Node } from "../src/struct/index";

/**
 * Tests for Node class.
 * @author Aleksi Huotala
 */
@suite
class NodeTest {
  @test public testGettersAndSetters() {
    const index = 0;
    const weight = 555;
    const node = new Node(index, weight);
    assert.equal(node.number, index);
    assert.equal(node.weight, weight);

    const lat = -60.123456;
    const lon = 24.556677;
    node.lat = lat;
    node.lon = lon;

    assert.equal(node.lat, lat);
    assert.equal(node.lon, lon);
  }
}
