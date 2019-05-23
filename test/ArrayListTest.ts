import * as assert from "assert";
import { suite, test, timeout } from "mocha-typescript";
import { ArrayList } from "../src/struct";

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite
class ArrayListTest {
  /**
   * Small test 1
   */
  @test public small1() {
    const arr: ArrayList<number> = new ArrayList<number>();

    // Numbers from 1 to 500
    const start = 1;
    const end = 500;
    for (let i = start; i < start + end; i++) {
      assert.equal(arr.size(), i - 1);
      arr.add(i);
      assert.equal(arr.size(), i);
      assert.equal(arr.get(i - 1), i);
    }
    assert.equal(arr.size(), end);
  }

  /**
   * Big test 1
   * TODO: Add testing for array's dynamic size adjustment
   */
  @timeout(40000)
  @test
  public big1() {
    const arr = new ArrayList<number>();

    // Add 5 million numbers
    const start = 1;
    const end = 5000000;
    for (let i = start; i < start + end; i++) {
      assert.equal(arr.size(), i - 1);
      arr.add(i);
      assert.equal(arr.size(), i);
      assert.equal(arr.get(i - 1), i);
    }
  }
}
