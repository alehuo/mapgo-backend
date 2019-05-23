/**
 * Comparator interface.
 * @author Aleksi Huotala
 */
interface Comparator<T> {
  /**
   * Compares two objects by a custom rule.
   */
  compare(t1: T, t2: T): number;
}
export default Comparator;
