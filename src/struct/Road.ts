import {Coordinate} from './';

/**
 * Road class. This class is used to store starting and ending coordinates of a road.
 */
class Road {
    /**
     * Starting coordinate
     */
    public s : Coordinate;
    /**
     * Ending coordinate
     */
    public e : Coordinate;

    constructor(s : Coordinate, e : Coordinate) {
        this.s = s;
        this.e = e;
    }
}

export default Road;