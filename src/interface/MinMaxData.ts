import { Data } from "./index";

interface MinMaxData extends Data {
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    roadCount: number
}

export default MinMaxData;