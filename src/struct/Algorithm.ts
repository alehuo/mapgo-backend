import {ArrayList, Step, Edge, Coordinate} from "../struct";
import {Statistics} from "../utils";

/**
 * Algorithm interface is used to standardize different path finding algorithms.
 * @author Aleksi Huotala
 */
abstract class Algorithm {

    /**
     * Graph.
     */
    public abstract graph : ArrayList < Edge > [];

    /**
     * Coordinate list. Index points to the coordinate a single node has.
     */
    public abstract coordlist : Coordinate[];

    /**
     * Statistics.
     */
    private stats : Statistics;

    constructor(graph : ArrayList < Edge > [], coordList : Coordinate[], stats : Statistics) {
        this.graph = graph;
        this.coordlist = coordList;
        this.stats = stats;
    }

    /**
     * Returns the algorithm's steps.
     */
    public getSteps() : Step[] {
        return this
            .stats
            .asArray();
    }

    /**
     * Returns the steps as a JSON string.
     */
    public getStepsAsJSON(pretty : boolean = false) : string {
        let level: number = 0;
        if (pretty) {
            level = 2;
        }
        return JSON.stringify(this.getSteps(), this.replacer, level);
    }

    /**
     * Replacer method to parse the Step[] array.
     * @param key
     * @param value
     */
    private replacer(key, value) {
        if (key == "index") {
            return undefined;
        }
        return value;
    }

    /**
     * Adds a new edge.
     * @param step Step
     */
    public addEdge(startingCoordinate : Coordinate, endingCoordinate : Coordinate) {}

    /**
     * Clears the steps -ArrayList.
     */
    public resetSteps() : void {
        this.stats.resetSteps();
    }
}

export default Algorithm;