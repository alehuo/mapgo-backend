import { Coordinate, Point } from './';

/**
 * Road class. This class is used to store starting and ending coordinates of a road.
 */
class Road {
    /**
     * Starting coordinate
     */
    public s: Point;
    /**
     * Ending coordinate
     */
    public e: Point;

    /**
     * Road id
     */
    public r: number;

    constructor(s: Point, e: Point, r: number) {
        this.s = s;
        this.e = e;
        this.r = r;
    }
}

export default Road;