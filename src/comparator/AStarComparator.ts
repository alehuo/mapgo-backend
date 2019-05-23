import { Comparator } from "../interface/index";
import { AStarNode, Coordinate, Node } from "../struct/index";
import { MathUtils } from "../utils/index";

class AStarComparator implements Comparator<AStarNode> {
  private latEnd: number;
  private lonEnd: number;
  private latStart: number;
  private lonStart: number;
  private heuristics: number = 1;

  constructor(
    latStart: number,
    lonStart: number,
    latEnd: number,
    lonEnd: number,
  ) {
    this.latEnd = latEnd;
    this.lonEnd = lonEnd;
    this.latStart = latStart;
    this.lonStart = lonStart;
  }

  public compare(t1: Node, t2: Node): number {
    let dist1: number;
    let dist2: number;
    if (this.heuristics === 0) {
      dist1 =
        MathUtils.distanceBetween(
          new Coordinate(t1.lat, t1.lon),
          new Coordinate(this.latStart, this.lonStart),
        ) +
        MathUtils.distanceBetween(
          new Coordinate(t1.lat, t1.lon),
          new Coordinate(this.latEnd, this.lonEnd),
        );
      dist2 =
        MathUtils.distanceBetween(
          new Coordinate(t2.lat, t2.lon),
          new Coordinate(this.latStart, this.lonStart),
        ) +
        MathUtils.distanceBetween(
          new Coordinate(t2.lat, t2.lon),
          new Coordinate(this.latEnd, this.lonEnd),
        );
    } else if (this.heuristics === 1) {
      dist1 = MathUtils.distanceBetween(
        new Coordinate(t1.lat, t1.lon),
        new Coordinate(this.latEnd, this.lonEnd),
      );
      dist2 = MathUtils.distanceBetween(
        new Coordinate(t2.lat, t2.lon),
        new Coordinate(this.latEnd, this.lonEnd),
      );
    }
    if (dist1 - dist2 > 0) {
      return 1;
    } else if (dist1 - dist2 < 0) {
      return -1;
    }
    return 0;
  }
}

export default AStarComparator;
