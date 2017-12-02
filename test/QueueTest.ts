import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { Queue } from '../src/struct/index';

/**
 * Tests for Queue class.
 * @author Aleksi Huotala
 */
@suite class QueueTest {

    @test testEnqueueAndDequeue() {
        let que: Queue<number> = new Queue<number>(512);

        for (let i = 10; i < 255; i++) {
            que.enqueue(i);
            assert.ok(!que.empty(), "Queue shouldnt be empty");
            assert.ok(!que.full(), "Queue shouldnt be full");
        }
        for (let i = 10; i < 255; i++) {
            assert.equal(que.dequeue(), i, "A dequeued element should be equal");
        }
    }
}