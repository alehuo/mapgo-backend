import ArrayList from "../struct/ArrayList";
import Step from "./../struct/Step";
import Edge from "./../struct/Edge";
import Coordinate from "./../struct/Coordinate";

/**
 * Algorithm interface is used to
 */
abstract class Algorithm {

    /**
     * Steps.
     */
    public abstract steps : ArrayList < Step >;

    /**
     * Graph.
     */
    public abstract graph : ArrayList < Edge > [];

    /**
     * Coordinate list. Index points to the coordinate a single node has.
     */
    public abstract coordlist : Coordinate[];

    constructor(graph : ArrayList < Edge > [], coordList : Coordinate[]) {
        this.graph = graph;
        this.steps = new ArrayList < Step > (coordList.length);
        this.coordlist = coordList;
    }

    /**
     * Returns the algorithm's steps.
     */
    public getSteps() : Step[] {
        return this
            .steps
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
        return JSON.stringify(this.steps.asArray(), this.replacer, level);
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
     * Adds a new step.
     * @param step Step
     */
    public addStep(step : Step) : void {
        this
            .steps
            .add(step);
    }

    /**
     * Clears the steps -ArrayList.
     */
    public resetSteps() : void {
        this
            .steps
            .clear();
    }
}

export default Algorithm;