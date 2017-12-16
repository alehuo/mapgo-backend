import { ArrayList, Step, Edge, Coordinate, Point } from "../struct";
import { Statistics, MathUtils } from "../utils";

/**
 * Algorithm interface is used to standardize different path finding algorithms.
 * @author Aleksi Huotala
 */
abstract class Algorithm {

    /**
     * Graph.
     */
    private graph: ArrayList<Edge>[];

    /**
     * Coordinate list. Index points to the coordinate a single node has.
     */
    private coordlist: Coordinate[];

    /**
     * Statistics.
     */
    private stats: Statistics;

    /**
     * Infinity
     */
    INFINITY: number = Number.MAX_SAFE_INTEGER;

    constructor(graph: ArrayList<Edge>[], coordList: Coordinate[], stats: Statistics) {
        this.graph = graph;
        this.coordlist = coordList;
        this.stats = stats;
    }

    /**
     * Returns the algorithm's steps.
     */
    public getSteps(): Step[] {
        this.stats.done();
        return this
            .stats
            .asArray();
    }

    /**
     * Returns the steps as a JSON string.
     */
    public getStepsAsJSON(pretty: boolean = false): string {
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

    public abstract run(startingNode?: number, endingNode?: number): void;

    /**
     * Adds a new edge. Conversion to xy is applied here.
     * @param step Step
     */
    public addEdge(startingCoordinate: Coordinate, endingCoordinate: Coordinate) {
        let startingPoint: Point = MathUtils.convertCoordinateToPoint(startingCoordinate);
        let endingPoint: Point = MathUtils.convertCoordinateToPoint(endingCoordinate);
        this.stats.addEdge(startingPoint, endingPoint);
    }

    /**
     * Clears the steps -ArrayList.
     */
    public resetSteps(): void {
        this.stats.resetSteps();
    }

    public getGraph(): ArrayList<Edge>[] {
        return this.graph;
    }

    public getCoordList(): Coordinate[] {
        return this.coordlist;
    }

    public getMinX(): number {
        return this.stats.getMinX();
    }

    public getMaxX(): number {
        return this.stats.getMaxX();
    }

    public getMinY(): number {
        return this.stats.getMinY();
    }

    public getMaxY(): number {
        return this.stats.getMaxY();
    }

    public getRoadMaxId(): number {
        return this.stats.getRoadMaxId();
    }

    public getStartX(): number {
        return this.stats.getStartX();
    }

    public getEndY(): number {
        return this.stats.getEndY();
    }

    public getEndX(): number {
        return this.stats.getEndX();
    }

    public getStartY(): number {
        return this.stats.getStartY();
    }

    public setStartCoords(point: Point) {
        this.stats.setStartingPoint(point);
    }

    public setEndCoords(point: Point) {
        this.stats.setEndingPoint(point);
    }
}

export default Algorithm;