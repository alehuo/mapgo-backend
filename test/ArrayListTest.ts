import {suite, test, slow, timeout} from 'mocha-typescript';
import * as assert from 'assert';
import ArrayList from '../src/struct/ArrayList';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class ArrayListTest {
    /**
     * Small test 1
     */
    @test small1() {
        let arr : ArrayList < number > = new ArrayList < number > ();

        // Numbers from 1 to 500
        let start : number = 1;
        let end : number = 500;
        for (let i = start; i < start + end; i++) {
            assert.equal(i - 1, arr.size());
            arr.add(i);
            assert.equal(i, arr.size());
            assert.equal(i, arr.get(i - 1));
        }
        assert.equal(end, arr.size());
    }

    /**
     * Big test 1
     * TODO: Add testing for array's dynamic size adjustment
     */
    @test big1() {
        let arr : ArrayList < number > = new ArrayList < number > ();

        // Add 5 million numbers
        let start : number = 1;
        let end : number = 5000000;
        for (let i = start; i < start + end; i++) {
            assert.equal(i - 1, arr.size());
            arr.add(i);
            assert.equal(i, arr.size());
            assert.equal(i, arr.get(i - 1));
        }
    }
}