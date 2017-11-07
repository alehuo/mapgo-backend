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
        this.data = new Array(size || 10);
        Arrays.fillObj(this.data, null);
        Object.seal(this.data);
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

        let tmpData: Array < T > = new Array(this.data.length * 3);
        Arrays.fillObj(tmpData, null);
        Object.seal(tmpData);

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
}