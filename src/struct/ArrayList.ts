/**
 * ArrayList class.
 *
 * @class ArrayList
 * @template T Types of the values that will be stored on the ArrayList.
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
     * Returns the size of the array
     */
    public size() : number {return this.index;}
}