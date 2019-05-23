/**
 * Node class.
 * @author Aleksi Huotala
 */
class Node {
  /**
   * Latitude
   */
  public lat: number;

  /**
   * Longitude
   */
  public lon: number;

  constructor(readonly number: number, readonly weight: number) {}
}

export default Node;
