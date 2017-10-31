import JsonEdge from './JsonEdge';

export default interface JsonNode {
    la : number,
    lo : number,
    e : JsonEdge[]
}