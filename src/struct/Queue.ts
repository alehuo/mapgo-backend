import { Arrays } from "../utils/index";

class Queue<T> {

    /**
     * Head.
     */
    private head: number;

    /**
     * Tail.
     */
    private tail: number;

    /**
     * Queue contents size.
     */
    private n: number;

    /**
     * Queue contents.
     */
    private data: T[];

    constructor(size: number = 10) {
        this.head = 0;
        this.tail = 0;
        this.n = size;
        this.data = new Array<T>(this.n);
        Arrays.fillObj(this.data, null);
        Object.seal(this.data);
    }

    /**
     * Returns the data of the queue.
     */
    public getData(): T[] {
        return this.data;
    }

    /**
     * Queues an element.
     * @param elem Element to be queued
     */
    public enqueue(elem: T): void {
        if (this.full()) {
            this.grow();
        }
        this.data[this.tail] = elem;
        this.tail++;
        if (this.tail == this.n) {
            this.tail = 0;
        }
    }

    /**
     * Removes the element at the head of the queue.
     */
    public dequeue(): T {
        let out: T = this.data[this.head];
        this.head++;
        if (this.head == this.n) {
            this.head = 0;
        }
        return out;
    }

    /**
     * Returns if the queue is empty.
     */
    public empty(): boolean {
        return this.head == this.tail;
    }

    /**
     * Returns if the queue is full.
     */
    public full(): boolean {
        let tailNext: number = this.tail + 1;
        if (tailNext == this.n) {
            tailNext = 0;
        }
        return this.head == tailNext;
    }

    /**
     * Grows the queue if needed.
     */
    private grow(): void {
        // Create a new array that's three times bigger than the most recent one
        let tmpData: Array<T> = new Array(Math.floor(this.data.length * 3 / 2) + 1);
        // Fill it and seal it.
        Arrays.fillObj(tmpData, null);
        Object.seal(tmpData);

        /* TODO */
    }
}

export default Queue;