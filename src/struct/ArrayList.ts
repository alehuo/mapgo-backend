import { Arrays } from "./../utils";

/**
 * ArrayList class.
 *
 * @class ArrayList
 * @template T Types of the values that will be stored on the ArrayList.
 * @author Aleksi Huotala
 */
class ArrayList<T> {
  /**
   * Data.
   *
   * @private
   * @type {Array < T >}
   * @memberof ArrayList
   */
  private data: T[];

  /**
   * Current index of the array.
   *
   * @private
   * @type {number}
   * @memberof ArrayList
   */
  private index: number;

  /**
   * ArrayList class.
   * @param size Initial array size
   */
  constructor(size?: number) {
    // Create new array with fixed size. Defaults to 10 if size is not defined
    this.data = new Array(size || 10);
    // Fill it
    Arrays.fill(this.data, null);
    // Steal it to prevent later modification.
    Object.seal(this.data);
    // Starting index is zero
    this.index = 0;
  }

  /**
   * Adds a object to the ArrayList
   * @param value Object
   */
  public add(value: T) {
    if (this.index === this.data.length) {
      this.grow();
    }
    this.data[this.index++] = value;
  }

  /**
   * Returns the element in a certain index. O(1)
   * @param index Array index
   */
  public get(index: number) {
    return this.data[index];
  }

  /**
   * Returns the amount of elements in the ArrayList.
   */
  public size() {
    return this.index;
  }

  /**
   * Returns the size of the ArrayList. Initially, the length is 10.
   * If enough elements are added, the array's size will triple to
   * make space for new elements.
   */
  public dataLength() {
    return this.data.length;
  }

  /**
   * Returns the ArrayList as an array. Removes empty elements from the end.
   * O(n) operation if null elements are removed from the end of the array, otherwise O(1).
   * @param removeNulls Choose to remove nulls
   */
  public asArray(removeNulls: boolean) {
    if (!removeNulls) {
      return this.data;
    }

    const tmpArr: T[] = new Array<T>(this.index);
    Arrays.fill(tmpArr, null);
    Object.seal(tmpArr);
    for (let i = 0; i < tmpArr.length; i++) {
      tmpArr[i] = this.data[i];
    }
    return tmpArr;
  }

  /**
   * Grows the array if needed.
   */
  private grow() {
    // Create a new array that's three times bigger than the most recent one
    const tmpData = new Array(Math.floor((this.data.length * 3) / 2) + 1);
    // Fill it and seal it.
    Arrays.fill(tmpData, null);
    Object.seal(tmpData);
    // Loop the old array and add its elements to the new one.
    for (let i = 0; i < this.index; i++) {
      tmpData[i] = this.data[i];
    }
    this.data = tmpData;
  }
}

export default ArrayList;
