import { AlgorithmType, Status } from "../enum/index";

interface Data {
    status: Status,
    stepSize?: number,
    startingNode?: number,
    endingNode?: number,
    algo?: AlgorithmType,
    payload?: any
}

export default Data;