import Comparator from './../interface/Comparator';
import {Arrays} from '../utils/index';

/**
 * Minimum heap implementation.
 * @author Aleksi Huotala
 */
class Heap < T > {

    /**
     * Queue that holds the elements of the heap.
     */
    private queue : T[];

    /**
     * Heap size.
     */
    private heapSize : number = 0;

    /**
     * Initial length of the heap.
     */
    private length : number = 10;

    /**
     * Comparator.
     */
    private comparator : Comparator < T > = null;

    /**
     * Minimum heap implementation
     * @param comparator Comparator
     */
    constructor(comparator : Comparator < T >) {
        this.queue = new Array < T > (this.length);
        Arrays.fillObj(this.queue, null);
        Object.seal(this.queue);
        this.comparator = comparator;
    }

    /**
     * Grows the array if needed.
     */
    private grow() : void {
        let tmpData: Array < T > = new Array(this.queue.length * 3);
        Arrays.fillObj(tmpData, null);
        Object.seal(tmpData);
        for (var i = 0; i < this.queue.length; i++) {
            tmpData[i] = this.queue[i];
        }
        this.queue = tmpData;
    }

    /**
     * Returns the parent of a node.
     * @param i Node index
     */
    public parent(i : number) : number {
        return Math.floor((i - 1) / 2);
    }

    /**
     * Returns the left child of the parent node.
     * @param i Parent index
     */
    public left(i : number) : number {
        return 2 * i + 1;
    }

    /**
     * Returns the right child of the parent node.
     * @param i Parent index
     */
    public right(i : number) : number {
        return 2 *i + 2;
    }

    /**
     * Heapify operation
     * @param i Index
     */
    private heapify(i : number) : void {

        // Left
        let l: number = this.left(i);
        // Right
        let r: number = this.right(i);

        // Largest
        let largest: number = 0;

        if (r <= this.heapSize) {
            // Determine which element is the largest
            if (this.comparator.compare(this.queue[l], this.queue[r]) < 0) {
                largest = l;
            } else {
                largest = r;
            }
            // If the element at i is larger than the element at 'largest' index
            if (this.comparator.compare(this.queue[i], this.queue[largest]) > 0) {
                let tmp : T = this.queue[i];
                this.queue[i] = this.queue[largest];
                this.queue[largest] = tmp;
                this.heapify(largest);
            }
        } else if (l == this.heapSize - 1 && this.comparator.compare(this.queue[i], this.queue[l]) > 0) {
            let tmp : T = this.queue[i];
            this.queue[i] = this.queue[l];
            this.queue[l] = tmp;
        }
    }

    /**
     * Inserts a new element to the heap.
     * @param k Element to be inserted.
     */
    public heapInsert(k : T) {
        // Increase heap size
        this.heapSize = this.heapSize + 1;

        // Grow the array if needed
        if (this.heapSize == this.queue.length) {
            this.grow();
        }

        // Set i
        let i : number = this.heapSize - 1;

        // While the element to be inserted is smaller than the parent
        while (i > 0 && this.comparator.compare(this.queue[this.parent(i)], k) > 0) {
            // Move the parent of i:th index to i
            this.queue[i] = this.queue[this.parent(i)];
            // Set new i
            i = this.parent(i);
        }

        // Finally, insert the new element into the heap.
        this.queue[i] = k;
    }

    /**
     * Deletes and returns the minimum element of the heap.
     */
    public heapDelMin() : T {
        // The minimum element is the first element of the queue
        let min: T = this.queue[0];

        // Move the last element of the que to the first index
        this.queue[0] = this.queue[this.heapSize - 1];

        // Decrease heap size
        this.heapSize = this.heapSize - 1;

        // Heapify operation
        this.heapify(0);

        // Return the minimum element
        return min;
    }

    /**
     * Returns the contents of the heap (without the last element).
     * Use for debugging.
     */
    public getContents() : T[] {
        let que2 : T[] = new Array < T > (this.heapSize);
        Arrays.fillObj(que2, null);
        Object.seal(que2);
        for (let i = 0; i < this.heapSize; i++) {
            que2[i] = this.queue[i];
        }
        return que2;
    }

    /**
     * Returns if the array is empty.
     */
    public isEmpty() : boolean {
        return this.heapSize == 0;
    }

}

export default Heap;