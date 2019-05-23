import { Data } from "./index";

interface MinMaxData extends Data {
  minX: number; // Min X
  maxX: number; // Max X
  minY: number; // Min Y
  maxY: number; // Max Y
  roadCount: number; // Road count
  startingX: number; // Starting X
  startingY: number; // Starting Y
  endingX?: number; // Ending X
  endingY?: number; // Ending Y
}

export default MinMaxData;
