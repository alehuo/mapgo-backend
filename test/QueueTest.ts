import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { Queue } from '../src/struct/index';

/**
 * Tests for Queue class.
 * @author Aleksi Huotala
 */
@suite class QueueTest {

    private testQueue(queSize: number) {
        let que: Queue<number> = new Queue<number>(queSize);
        for (let i = 0; i < queSize - 1; i++) {
            que.enqueue(i);
            assert.equal(que.size(), i + 1, "Size should grow as we add elements");
            assert.ok(!que.empty(), "Queue shouldnt be empty");    
        }

        assert.ok(que.full(), "Queue should be full after inserting " + queSize + " elements");

        let val = 0;
        while (!que.empty()) {
            let dequeuedElement: number = que.dequeue();
            assert.equal(dequeuedElement, val, "A dequeued element should be equal");
            val++;
        }
        assert.ok(que.empty(), "Queue should be empty after dequeuing all elements.");
    }

    @test testEnqueueAndDequeueSmall() {
        for(let i = 1000; i > 0; i--) {
            this.testQueue(i);
        }
    }

    @timeout(20000)
    @test testEnqueueAndDequeueLarge() {
        for(let i = 1000000; i > 10; i/=2) {
            this.testQueue(Math.ceil(i));
        }
    }
}