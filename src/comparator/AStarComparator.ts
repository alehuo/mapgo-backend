import { Comparator } from "../interface/index";
import { Node, Coordinate, AStarNode } from "../struct/index";
import { MathUtils } from "../utils/index";

class AStarComparator implements Comparator<AStarNode> {

    private latEnd: number;
    private lonEnd: number;

    constructor(latEnd: number, lonEnd: number) {
        this.latEnd = latEnd;
        this.lonEnd = lonEnd;
    }

    compare(t1: Node, t2: Node): number {
        let dist1: number = MathUtils.distanceBetween(new Coordinate(t1.lat, t1.lon), new Coordinate(this.latEnd, this.lonEnd));
        let dist2: number = MathUtils.distanceBetween(new Coordinate(t2.lat, t2.lon), new Coordinate(this.latEnd, this.lonEnd));
        if (dist1 - dist2 > 0) {
            return 1;
        } else if (dist1 - dist2 < 0) {
            return -1;
        }
        return 0;
    }
}

export default AStarComparator;