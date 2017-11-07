import {Arrays} from './../utils';

/**
 * ArrayList class.
 *
 * @class ArrayList
 * @template T Types of the values that will be stored on the ArrayList.
 * @author Aleksi Huotala
 */
export default class ArrayList < T > {

    /**
     * Data.
     *
     * @private
     * @type {Array < T >}
     * @memberof ArrayList
     */
    private data : Array < T >;

    /**
     * Current index of the array.
     *
     * @private
     * @type {number}
     * @memberof ArrayList
     */
    private index : number;

    constructor(size?: number) {
        // Create new array with fixed size
        this.data = new Array(size || 10);
        // Fill it
        Arrays.fillObj(this.data, null);
        // Steal it to prevent later modification.
        Object.seal(this.data);
        // Starting index is zero
        this.index = 0;
    }

    /**
     * Adds a object to the ArrayList
     * @param value Object
     */
    public add(value : T) : void {
        if(this.index == this.data.length) {
            this.grow();
        }
        this.data[this.index++] = value;
    }

    /**
     * Grows the array if needed.
     */
    private grow() : void {
        // Create a new array that's three times bigger than the most recent one
        let tmpData: Array < T > = new Array(this.data.length * 3);
        // Fill it and seal it.
        Arrays.fillObj(tmpData, null);
        Object.seal(tmpData);
        // Loop the old array and add its elements to the new one.
        for (var i = 0; i < this.index; i++) {
            tmpData[i] = this.data[i];
        }
        this.data = tmpData;
    }

    /**
     * Returns the element in a certain index.
     * @param index Index
     */
    public get(index : number) : T {return this.data[index];}

    /**
     * Returns the amount of elements in the ArrayList.
     */
    public size() : number {return this.index;}

    /**
     * Returns the size of the ArrayList. Initially, the length is 10.
     * If enough elements are added, the array's size will triple to
     * make space for new elements.
     */
    public dataLength() : number {return this.data.length;}

    /**
     * Returns the ArrayList as an array.
     */
    public asArray() : T[] {
        return this.data;
    }
}