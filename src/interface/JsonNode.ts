import JsonEdge from './JsonEdge';

/**
 * JsonNode interface.
 */
interface JsonNode {
    /**
     * Latitude
     */
    la : number,
    /**
     * Longitude
     */
    lo : number,
    /**
     * Edges
     */
    e : JsonEdge[]
}

export default JsonNode;