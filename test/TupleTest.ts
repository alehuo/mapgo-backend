import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { Tuple } from '../src/struct/index';

/**
 * Tests for Tuple class.
 * @author Aleksi Huotala
 */
@suite class TupleTest {

    @test testGetterAndSetter() {
        let num: number = 42;
        let str: string = "HelloWorld";
        let tuple: Tuple<number, string> = new Tuple<number, string>(num, str);
        assert.deepEqual(tuple.arg2, str);
        assert.deepEqual(tuple.arg1, num);
        assert.deepEqual(tuple.getSecond(), str);
        assert.deepEqual(tuple.getFirst(), num);
    }
}