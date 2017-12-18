import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { ArrayList } from '../src/struct';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class ArrayListTest {
    /**
     * Small test 1
     */
    @test small1() {
        let arr: ArrayList<number> = new ArrayList<number>();

        // Numbers from 1 to 500
        let start: number = 1;
        let end: number = 500;
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
    @test big1() {
        let arr: ArrayList<number> = new ArrayList<number>();

        // Add 5 million numbers
        let start: number = 1;
        let end: number = 5000000;
        for (let i = start; i < start + end; i++) {
            assert.equal(arr.size(), i - 1);
            arr.add(i);
            assert.equal(arr.size(), i);
            assert.equal(arr.get(i - 1), i);
        }
    }
}