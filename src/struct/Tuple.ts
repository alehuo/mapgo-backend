/**
 * Tuple class for encapsulating two objects.
 */
class Tuple<T, K> {
  constructor(readonly arg1: T, readonly arg2: K) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }

  public getFirst() {
    return this.arg1;
  }

  public getSecond() {
    return this.arg2;
  }
}

export default Tuple;
