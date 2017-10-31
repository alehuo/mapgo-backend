import { suite, test, slow, timeout } from "mocha-typescript";
import * as assert from "assert";

@suite class HelloTest {
    @test testEquals() {
        assert.equal(1, 2, "Expected one to equal two.");
    }
}