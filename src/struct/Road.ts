import { Coordinate, Point } from "./";

/**
 * Road class. This class is used to store starting and ending coordinates of a road.
 */
class Road {
  /**
   *
   * @param s Starting coordinate
   * @param e Ending coordinate
   * @param r Road ID
   */
  constructor(readonly s: Point, readonly e: Point, readonly r: number) {}
}

export default Road;
