import {Coordinate, ArrayList, Step} from "../struct/index";

/**
 * Statistics class is used to save a path finding algorithm's progress to visualize it.
 */
class Statistics {

    /**
     * Edges per step.
     */
    private edgesPerStep : number;

    /**
     * Steps.
     */
    private steps : ArrayList < Step >;

    /**
     * Current step.
     */
    private currentStep : Step;

    constructor(edgesPerStep : number) {
        this.edgesPerStep = edgesPerStep;
        this.steps = new ArrayList();
        this.currentStep = new Step(edgesPerStep);
    }

    public addEdge(startingCoordinate : Coordinate, endingCoordinate : Coordinate) {
        this.stepCheck();
        // Add new edge.
        this
            .currentStep
            .addRoad(startingCoordinate, endingCoordinate);
    }

    public asArray() : Step[] {
        return this
            .steps
            .asArray(true);
    }

    public resetSteps() : void {
        this.steps = new ArrayList < Step > ();
        this.currentStep = new Step(this.edgesPerStep);
    }

    private stepCheck() : void {

        if(this.currentStep == null) {
            return;
        }

        // If we have reached the step limit
        if (this.edgesPerStep == this.currentStep.count()) {
            let tmpStep: any = this.currentStep;
            // Add the step to the steps ArrayList
            this
                .steps
                .add(tmpStep);
            // Reinitialize current step.
            this.currentStep = new Step(this.edgesPerStep);
        }
    }
}

export default Statistics;