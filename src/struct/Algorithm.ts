import { ArrayList, Coordinate, Edge, Point, Step } from "../struct";
import { MathUtils, Statistics } from "../utils";

/**
 * Algorithm interface is used to standardize different path finding algorithms.
 * @author Aleksi Huotala
 */
abstract class Algorithm {
  /**
   * Infinity
   */
  public INFINITY = Number.MAX_SAFE_INTEGER;
  /**
   * Graph.
   */
  private graph: Array<ArrayList<Edge>>;

  /**
   * Coordinate list. Index points to the coordinate a single node has.
   */
  private coordlist: Coordinate[];

  /**
   * Statistics.
   */
  private stats: Statistics;

  constructor(
    graph: Array<ArrayList<Edge>>,
    coordList: Coordinate[],
    stats: Statistics,
    minMaxData: number[],
  ) {
    this.graph = graph;
    this.coordlist = coordList;
    this.stats = stats;
    this.stats.setMinMaxData(minMaxData);
  }

  /**
   * Returns the algorithm's steps.
   */
  public getSteps() {
    this.stats.done();
    return this.stats.asArray();
  }

  /**
   * Returns the steps as a JSON string.
   */
  public getStepsAsJSON(pretty: boolean = false) {
    let level: number = 0;
    if (pretty) {
      level = 2;
    }
    return JSON.stringify(this.getSteps(), this.replacer, level);
  }

  public abstract run(startingNode?: number, endingNode?: number): void;

  /**
   * Adds a new edge. Conversion to xy is applied here.
   * @param step Step
   */
  public addEdge(startingCoordinate: Coordinate, endingCoordinate: Coordinate) {
    const startingPoint = MathUtils.convertCoordinateToPoint(
      startingCoordinate,
    );
    const endingPoint = MathUtils.convertCoordinateToPoint(endingCoordinate);
    this.stats.addEdge(startingPoint, endingPoint);
  }

  /**
   * Clears the steps -ArrayList.
   */
  public resetSteps() {
    this.stats.resetSteps();
  }

  public getGraph() {
    return this.graph;
  }

  public getCoordList() {
    return this.coordlist;
  }

  public getMinX() {
    return this.stats.getMinX();
  }

  public getMaxX() {
    return this.stats.getMaxX();
  }

  public getMinY() {
    return this.stats.getMinY();
  }

  public getMaxY() {
    return this.stats.getMaxY();
  }

  public getRoadMaxId() {
    return this.stats.getRoadMaxId();
  }

  public getStartX() {
    return this.stats.getStartX();
  }

  public getEndY() {
    return this.stats.getEndY();
  }

  public getEndX() {
    return this.stats.getEndX();
  }

  public getStartY() {
    return this.stats.getStartY();
  }

  public setStartCoords(point: Point) {
    this.stats.setStartingPoint(point);
  }

  public setEndCoords(point: Point) {
    this.stats.setEndingPoint(point);
  }

  /**
   * Replacer method to parse the Step[] array.
   * @param key
   * @param value
   */
  private replacer(key: string, value: any) {
    return key === "index" ? undefined : value;
  }
}

export default Algorithm;
