/**
 * Utility class for filling arrays with different types of elements.
 * @author Aleksi Huotala
 */
class Arrays {
  /**
   * Fills an array with objects.
   * @param arr Array
   * @param obj object
   */
  public static fillObj(arr: object[], obj: object) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = obj;
    }
  }
  /**
   * Fills an array with numbers.
   * @param arr Array
   * @param obj number
   */
  public static fillNum(arr: number[], obj: number) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = obj;
    }
  }
  /**
   * Fills an array with strings.
   * @param arr Array
   * @param obj string
   */
  public static fillString(arr: string[], obj: string) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = obj;
    }
  }
  /**
   * Fills an array with booleans
   * @param arr Array
   * @param obj boolean
   */
  public static fillBoolean(arr: boolean[], obj: boolean) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = obj;
    }
  }

  /**
   * Fills an arrat with types of its own kind.
   * @param arr Array
   * @param obj Value that is the type of the array
   */
  public static fill<T>(arr: T[], obj: T) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = obj;
    }
  }
}
export default Arrays;
