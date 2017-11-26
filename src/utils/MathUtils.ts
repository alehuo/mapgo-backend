import { Coordinate, Point } from "../struct/index";

class MathUtils {

    public static rEarth: number = 6371 * 1000 * 100;

    /**
     * Converts degrees to radians
     * @param deg Radians
     */
    public static toRadians(deg: number): number {
        return deg * Math.PI / 180;
    }

    /**
     * Estimates the distance between two points in space.
     * @param start Starting coordinate
     * @param end Ending coordinate
     * @returns Distance in centimetres
     */
    public static distanceBetween(start: Coordinate, end: Coordinate): number {
        let startingCoordinate: Coordinate = start;
        let endingCoordinate: Coordinate = end;

        let angle1: number = MathUtils.toRadians(startingCoordinate.lat);
        let angle2: number = MathUtils.toRadians(endingCoordinate.lat);

        let deltaPhi: number = MathUtils.toRadians(endingCoordinate.lat - startingCoordinate.lat);
        let deltaLambda: number = MathUtils.toRadians(endingCoordinate.lon - startingCoordinate.lon);

        let a: number = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(angle1) * Math.cos(angle2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

        let c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        let d: number = MathUtils.rEarth * c;

        return d;
    }

    public static convertCoordinateToPoint(coord: Coordinate): Point {
        let x: number = Math.floor(MathUtils.rEarth * Math.cos(coord.lat) * Math.cos(coord.lon))
        let y: number = Math.floor(MathUtils.rEarth * Math.cos(coord.lat) * Math.sin(coord.lon));
        return new Point(x, y);
    }
}

export default MathUtils;