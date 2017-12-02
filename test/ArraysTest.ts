import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { Arrays } from '../src/utils';

/**
 * Tests for ArrayList class.
 * @author Aleksi Huotala
 */
@suite class ArraysTest {

    @test testNumbers() {
        let numArr: number[] = [
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ];
        Object.seal(numArr);

        let num: number = 99;

        Arrays.fillNum(numArr, num);

        for (let i = 0; i < numArr.length; i++) {
            assert.equal(numArr[i], num, "Should be " + num);
        }

    }

    @test testStrings() {
        let stringArr: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];
        Object.seal(stringArr);

        Arrays.fillString(stringArr, "HelloWorld");

        for (let i = 0; i < stringArr.length; i++) {
            assert.equal(stringArr[i], "HelloWorld", "Should be HelloWorld");
        }
    }

    @test testObjects() {
        let testObj: TestObject = new TestObject();
        let objectArr: object[] = [testObj, testObj];
        Object.seal(objectArr);

        let testObj2: TestObject2 = new TestObject2();
        Arrays.fillObj(objectArr, testObj2);

        for (let i = 0; i < objectArr.length; i++) {
            assert.equal(objectArr[i], testObj2, "Should be TestObject2");
        }
    }

    @test testBooleans() {
        let booleanArr: boolean[] = [false, false, false, false];
        Object.seal(booleanArr);

        Arrays.fillBoolean(booleanArr, true);

        for (let i = 0; i < booleanArr.length; i++) {
            assert.equal(booleanArr[i], true, "Should be true");
        }
    }

}

class TestObject { }

class TestObject2 { }