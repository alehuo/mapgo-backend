import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import { Tuple } from "../src/struct/index";

/**
 * Tests for Tuple class.
 * @author Aleksi Huotala
 */
@suite
class TupleTest {
  @test public testGetterAndSetter() {
    const num = 42;
    const str = "HelloWorld";
    const tuple = new Tuple<number, string>(num, str);
    assert.deepEqual(tuple.arg2, str);
    assert.deepEqual(tuple.arg1, num);
    assert.deepEqual(tuple.getSecond(), str);
    assert.deepEqual(tuple.getFirst(), num);
  }
}
