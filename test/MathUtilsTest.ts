import * as assert from "assert";
import { suite, test } from "mocha-typescript";
import { Coordinate } from "../src/struct/index";
import { MathUtils } from "../src/utils/index";

/**
 * Tests for MathUtils class.
 * @author Aleksi Huotala
 */
@suite
class MathUtilsTest {
  @test public toRadiansTest() {
    let degrees = 180;
    let radians = MathUtils.toRadians(degrees);
    assert.equal(radians, Math.PI);

    degrees = 360;
    radians = MathUtils.toRadians(degrees);
    assert.equal(radians, 2 * Math.PI);
  }

  @test public distanceBetweenTestSameCoordsEqualZero() {
    const startCoord = new Coordinate(60.169366, 24.922142);
    const endCoord = new Coordinate(60.169366, 24.922142);

    const distance = MathUtils.distanceBetween(startCoord, endCoord);
    assert.equal(distance, 0);
  }
}
