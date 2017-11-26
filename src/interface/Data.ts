import { AlgorithmType, Status } from "../enum/index";

interface Data {
    status: Status;
    stepSize?: number;
    algo?: AlgorithmType;
    payload?: any;
}

export default Data;