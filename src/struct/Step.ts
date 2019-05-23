import { ArrayList, Point, Road } from "./";

/**
 * Step class.
 */
class Step {
  /**
   * Each step contains roads that will be used when visualizing the drawing of the map.
   */
  private r: ArrayList<Road>;

  /**
   * Constructor.
   * @param arrSize Array size (number of roads per step)
   */
  constructor(arrSize: number) {
    this.r = new ArrayList<Road>(arrSize);
  }

  /**
   * Adds a new road.
   * @param startPoint Starting point
   * @param endPoint Ending point
   */
  public addRoad(startPoint: Point, endPoint: Point, roadId: number) {
    this.r.add(new Road(startPoint, endPoint, roadId));
  }

  /**
   * Returns the roads as an array.
   */
  public getRoads() {
    return this.r.asArray(true);
  }

  public count() {
    return this.r.size();
  }
}

export default Step;
