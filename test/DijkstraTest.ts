import {suite, test, slow, timeout} from 'mocha-typescript';
import * as assert from 'assert';
import ArrayList from '../src/struct/ArrayList';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class DijkstraTest {
    /**
     * Small test 1
     */
    @test small1() {
        assert.equal(true, true, "True should be true");
    }

    /**
     * Big test 1
     * TODO: Add testing for array's dynamic size adjustment
     */
    @test big1() {
        assert.equal(true, true, "True should be true");
    }
}