/**
 * Comparable interface.
 * @author Aleksi Huotala
 */
export default interface Comparable<T> {
  compareTo(t1: T): number;
}
