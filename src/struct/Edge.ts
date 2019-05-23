/**
 * Edge class.
 * @author Aleksi Huotala
 */
class Edge {
  constructor(readonly dest: number, readonly w: number) {}

  /**
   * Returns the weight of the edge.
   */
  public getWeight(): number {
    return this.w;
  }

  /**
   * Returns the destination node.
   */
  public getDest(): number {
    return this.dest;
  }
}

export default Edge;
