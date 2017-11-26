import { Coordinate, ArrayList, Step, Point } from "../struct/index";
import { start } from "repl";

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

    private minX: number = Number.MAX_SAFE_INTEGER;
    private maxX: number = Number.MIN_SAFE_INTEGER;
    private minY: number = Number.MAX_SAFE_INTEGER;
    private maxY: number = Number.MIN_SAFE_INTEGER;

    constructor(edgesPerStep: number) {
        this.edgesPerStep = edgesPerStep;
        this.steps = new ArrayList();
        this.currentStep = new Step(edgesPerStep);
    }

    public addEdge(startingPoint: Point, endingPoint: Point) {

        if (this.currentStep.count() == this.edgesPerStep) {
            this.steps.add(this.currentStep);
            this.currentStep = new Step(this.edgesPerStep);
        }

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


        // Add new edge.
        this
            .currentStep
            .addRoad(startingPoint, endingPoint, this.roadId);

        this.roadId++;
    }

    /**
     * Call after everything is done
     */
    public done(): void {
        this.steps.add(this.currentStep);
        this.currentStep = null;
    }

    public asArray(): Step[] {
        return this
            .steps
            .asArray(true);
    }

    public resetSteps(): void {
        this.steps = new ArrayList<Step>();
        this.currentStep = new Step(this.edgesPerStep);
    }

    public getMinX(): number {
        return this.minX;
    }

    public getMaxX(): number {
        return this.maxX;
    }

    public getMinY(): number {
        return this.minY;
    }

    public getMaxY(): number {
        return this.maxY;
    }

    public getRoadMaxId(): number {
        return this.roadId;
    }

    private stepCheck(): void {

        if (this.currentStep !== null) {

            // If we have reached the step limit
            if (this.edgesPerStep == this.currentStep.count()) {
                let tmpStep: Step = this.currentStep;
                // Add the step to the steps ArrayList
                this
                    .steps
                    .add(tmpStep);
                // Reinitialize current step.
                this.currentStep = new Step(this.edgesPerStep);
            }
        }
    }
}

export default Statistics;