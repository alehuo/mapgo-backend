import * as assert from "assert";
import { suite, test, timeout } from "mocha-typescript";
import { Queue } from "../src/struct/index";

/**
 * Tests for Queue class.
 * @author Aleksi Huotala
 */
@suite
class QueueTest {
  @test public testEnqueueAndDequeueSmall() {
    for (let i = 1000; i > 0; i--) {
      this.testQueue(i);
    }
  }

  @timeout(20000)
  @test
  public testEnqueueAndDequeueLarge() {
    for (let i = 1000000; i > 10; i /= 2) {
      this.testQueue(Math.ceil(i));
    }
  }
  private testQueue(queSize: number) {
    const que = new Queue<number>(queSize);
    for (let i = 0; i < queSize - 1; i++) {
      que.enqueue(i);
      assert.equal(que.size(), i + 1, "Size should grow as we add elements");
      assert.ok(!que.empty(), "Queue shouldnt be empty");
    }

    assert.ok(
      que.full(),
      "Queue should be full after inserting " + queSize + " elements",
    );

    let val = 0;
    while (!que.empty()) {
      const dequeuedElement = que.dequeue();
      assert.equal(dequeuedElement, val, "A dequeued element should be equal");
      val++;
    }
    assert.ok(
      que.empty(),
      "Queue should be empty after dequeuing all elements.",
    );
  }
}
