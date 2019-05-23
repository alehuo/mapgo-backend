import { ArrayList, Point, Step } from "../struct/index";

/**
 * Statistics class is used to save a path finding algorithm's progress to visualize it.
 */
class Statistics {
  /**
   * Edges per step.
   */
  private edgesPerStep: number;

  /**
   * Steps.
   */
  private steps: ArrayList<Step>;

  private roadId: number = 0;

  /**
   * Current step.
   */
  private currentStep: Step;

  private minX = Number.MAX_SAFE_INTEGER;
  private maxX = Number.MIN_SAFE_INTEGER;
  private minY = Number.MAX_SAFE_INTEGER;
  private maxY = Number.MIN_SAFE_INTEGER;

  private startX: number;
  private startY: number;

  private endX: number;
  private endY: number;

  constructor(edgesPerStep: number) {
    this.edgesPerStep = edgesPerStep;
    this.steps = new ArrayList();
    this.currentStep = new Step(edgesPerStep);
  }

  /**
   * Sets the starting point.
   * @param startingPoint Starting point.
   */
  public setStartingPoint(startingPoint: Point) {
    this.startX = startingPoint.x;
    this.startY = startingPoint.y;
  }

  /**
   * Sets the ending point.
   * @param endingPoint Ending point.
   */
  public setEndingPoint(endingPoint: Point) {
    this.endX = endingPoint.x;
    this.endY = endingPoint.y;
  }

  public setMinMaxData(data: number[]) {
    this.minX = data[0];
    this.maxX = data[1];
    this.minY = data[2];
    this.maxY = data[3];
  }

  /**
   * Adds a new edge.
   * @param startingPoint Starting point.
   * @param endingPoint Ending point.
   */
  public addEdge(startingPoint: Point, endingPoint: Point) {
    if (this.currentStep.count() === this.edgesPerStep) {
      this.steps.add(this.currentStep);
      this.currentStep = new Step(this.edgesPerStep);
    }

    /*
        if (startingPoint.x < this.minX) {
            this.minX = startingPoint.x;
        }
        if (startingPoint.x > this.maxX) {
            this.maxX = startingPoint.x;
        }
        if (startingPoint.y < this.minY) {
            this.minY = startingPoint.y;
        }
        if (startingPoint.y > this.maxY) {
            this.maxY = startingPoint.y;
        }

        if (endingPoint.x < this.minX) {
            this.minX = endingPoint.x;
        }
        if (endingPoint.x > this.maxX) {
            this.maxX = endingPoint.x;
        }
        if (endingPoint.y < this.minY) {
            this.minY = endingPoint.y;
        }
        if (endingPoint.y > this.maxY) {
            this.maxY = endingPoint.y;
        }

*/

    // Add new edge.
    this.currentStep.addRoad(startingPoint, endingPoint, this.roadId);

    this.roadId++;
  }

  /**
   * Call after everything is done
   */
  public done() {
    this.steps.add(this.currentStep);
    this.currentStep = null;
  }

  /**
   * Returns Algorithm's steps as an Array.
   */
  public asArray() {
    return this.steps.asArray(true);
  }

  /**
   * Resets the algorithm's steps.
   */
  public resetSteps() {
    this.steps = new ArrayList<Step>();
    this.currentStep = new Step(this.edgesPerStep);
  }

  /**
   * Returns the minimum X.
   */
  public getMinX() {
    return this.minX;
  }

  /**
   * Returns the maximum X.
   */
  public getMaxX() {
    return this.maxX;
  }

  /**
   * Returns the minimum Y.
   */
  public getMinY() {
    return this.minY;
  }

  /**
   * Returns the maximum Y.
   */
  public getMaxY() {
    return this.maxY;
  }

  /**
   * Returns the road maximum id.
   */
  public getRoadMaxId() {
    return this.roadId;
  }

  /**
   * Returns the starting X coordinate.
   */
  public getStartX() {
    return this.startX;
  }

  /**
   * Returns the starting Y coordinate.
   */
  public getStartY() {
    return this.startY;
  }

  /**
   * Returns the ending X coordinate.
   */
  public getEndX() {
    return this.endX;
  }

  /**
   * Returns the ending Y coordinate.
   */
  public getEndY() {
    return this.endY;
  }

  /**
   * Checks the step if we require additional steps to be created.
   */
  private stepCheck() {
    if (this.currentStep !== null) {
      // If we have reached the step limit
      if (this.edgesPerStep === this.currentStep.count()) {
        const tmpStep = this.currentStep;
        // Add the step to the steps ArrayList
        this.steps.add(tmpStep);
        // Reinitialize current step.
        this.currentStep = new Step(this.edgesPerStep);
      }
    }
  }
}

export default Statistics;
