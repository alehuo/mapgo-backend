/**
 * Edge class.
 * @author Aleksi Huotala
 */
class Edge {
    /**
     * Destination node number
     */
    private dest : number;
    /**
     * Weight
     */
    private w : number;

    constructor(destination : number, weight : number) {
        this.dest = destination;
        this.w = weight;
    }

    /**
     * Returns the weight of the edge.
     */
    public getWeight() : number {return this.w;}

    /**
     * Returns the destination node.
     */
    public getDest() : number {return this.dest;}
}

export default Edge;