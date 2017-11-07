import {ArrayList, Coordinate, Road} from "./";

/**
 * Step class.
 */
class Step {

    /**
     * Each step contains roads that will be used when visualizing the drawing of the map.
     */
    private r : ArrayList < Road >;

    /**
     * Constructor.
     * @param arrSize Array size (number of roads per step)
     */
    constructor(arrSize : number) {
        this.r = new ArrayList < Road > (arrSize);
    }

    /**
     * Adds a new road.
     * @param startCoord Starting coordinate
     * @param endCoord Ending coordinate
     */
    public addRoad(startCoord : Coordinate, endCoord : Coordinate) {
        this
            .r
            .add(new Road(startCoord, endCoord));
    }

    /**
     * Returns the roads as an array.
     */
    public getRoads() : Road[] {
        return this
            .r
            .asArray();
    }

}

export default Step;