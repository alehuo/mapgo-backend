import { AlgorithmType, Status } from "../enum/index";

interface Data {
    status: Status;
    algo?: AlgorithmType;
    payload?: any;
}

export default Data;