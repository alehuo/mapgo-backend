import { Coordinate, Point } from "../struct/index";

class MathUtils {
  public static rEarth: number = 6371 * 1000 * 100;

  /**
   * Converts degrees to radians
   * @param deg Radians
   */
  public static toRadians(deg: number) {
    return (deg * Math.PI) / 180;
  }

  /**
   * Estimates the distance between two points in space.
   * @param start Starting coordinate
   * @param end Ending coordinate
   * @returns Distance in centimetres
   */
  public static distanceBetween(start: Coordinate, end: Coordinate) {
    const startingCoordinate = start;
    const endingCoordinate = end;

    const angle1 = MathUtils.toRadians(startingCoordinate.lat);
    const angle2 = MathUtils.toRadians(endingCoordinate.lat);

    const deltaPhi = MathUtils.toRadians(
      endingCoordinate.lat - startingCoordinate.lat,
    );
    const deltaLambda = MathUtils.toRadians(
      endingCoordinate.lon - startingCoordinate.lon,
    );

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(angle1) *
        Math.cos(angle2) *
        Math.sin(deltaLambda / 2) *
        Math.sin(deltaLambda / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = MathUtils.rEarth * c;

    return d;
  }

  public static convertCoordinateToPoint(coord: Coordinate) {
    const x = Math.floor(
      MathUtils.rEarth * Math.cos(coord.lat) * Math.cos(coord.lon),
    );
    const y = Math.floor(
      MathUtils.rEarth * Math.cos(coord.lat) * Math.sin(coord.lon),
    );
    return new Point(x, y);
  }
}

export default MathUtils;
