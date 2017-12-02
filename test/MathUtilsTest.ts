import { suite, test, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert'
import { MathUtils } from '../src/utils/index';
import { Coordinate } from '../src/struct/index';

/**
 * Tests for MathUtils class.
 * @author Aleksi Huotala
 */
@suite class MathUtilsTest {

    @test toRadiansTest() {
        let degrees: number = 180;
        let radians: number = MathUtils.toRadians(degrees);
        assert.equal(radians, Math.PI);

        degrees = 360;
        radians = MathUtils.toRadians(degrees);
        assert.equal(radians, 2 * Math.PI);
    }

    @test distanceBetweenTestSameCoordsEqualZero() {
        let startCoord: Coordinate = new Coordinate(60.169366, 24.922142);
        let endCoord: Coordinate = new Coordinate(60.169366, 24.922142);

        let distance: number = MathUtils.distanceBetween(startCoord, endCoord);
        assert.equal(distance, 0);
    }
}