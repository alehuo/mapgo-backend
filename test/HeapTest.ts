import * as assert from "assert";
import { suite, test, timeout } from "mocha-typescript";
import { Comparator } from "../src/interface/index";
import { Heap } from "../src/struct/index";

/**
 * Tests for Heap class.
 * @author Aleksi Huotala
 */
@suite
class HeapTest {
  @test public testParentLeftRight() {
    const heap = this.createHeap();

    for (let i = 0; i < 10000; i++) {
      assert.equal(heap.left(i), 2 * i + 1);
      assert.equal(heap.right(i), 2 * i + 2);
      assert.equal(heap.parent(i), Math.floor((i - 1) / 2));
    }
  }

  /**
   * Numbers are inserted on descending order
   */
  @timeout(20000)
  @test
  public testElementInsertSmall() {
    for (let i = 10000; i > 10; i -= 100) {
      this.testHeapDescending(i);
    }
  }

  /**
   * Numbers are inserted on descending order
   */
  @timeout(20000)
  @test
  public testElementInsertLarge() {
    for (let i = 100000; i > 10; i /= 3) {
      this.testHeapDescending(Math.ceil(i));
    }
  }

  /**
   * Numbers are inserted on random order
   */
  @timeout(20000)
  @test
  public testElementInsertRandomSmall() {
    for (let i = 10000; i > 10; i -= 100) {
      this.testHeapRandom(i, 1000000);
    }
  }

  /**
   * Numbers are inserted on random order
   */
  @timeout(20000)
  @test
  public testElementInsertRandomLarge() {
    for (let i = 100000; i > 10; i /= 3) {
      this.testHeapRandom(Math.ceil(i), 1000000);
    }
  }
  private createHeap(): Heap<number> {
    return new Heap<number>(new NumberComparator());
  }

  private testHeapDescending(heapSize: number) {
    const heap = this.createHeap();

    assert.ok(heap.isEmpty());

    for (let i = heapSize; i >= 0; i--) {
      heap.heapInsert(i);
    }

    assert.ok(!heap.isEmpty());

    const contents = heap.getContents();

    assert.ok(contents.length > 0);

    // Add heap size

    let tmpNumber = -1;
    while (!heap.isEmpty()) {
      const tmpNumber2 = heap.heapDelMin();
      assert.ok(
        tmpNumber < tmpNumber2,
        "Elements should be in ascending order when calling heapDelMin",
      );
      tmpNumber = tmpNumber2;
    }

    assert.ok(heap.isEmpty());
  }

  private testHeapRandom(heapSize: number, maxNum: number) {
    const heap = this.createHeap();

    assert.ok(heap.isEmpty());

    for (let i = heapSize; i >= 0; i--) {
      heap.heapInsert(Math.random() * maxNum);
    }

    assert.ok(!heap.isEmpty());

    let tmpNumber = -1;
    while (!heap.isEmpty()) {
      const tmpNumber2 = heap.heapDelMin();
      assert.ok(tmpNumber <= tmpNumber2);
      tmpNumber = tmpNumber2;
    }

    assert.ok(heap.isEmpty());
  }

  /*
    TODO Heapify tests
    */
}

class NumberComparator implements Comparator<number> {
  public compare(t1: number, t2: number) {
    return t1 - t2;
  }
}
