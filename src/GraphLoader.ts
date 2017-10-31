import * as fs from 'fs';
import JsonNode from './struct/JsonNode';

/**
 * Loads the graph from JSON file.
 */
export default class GraphLoader {
    /**
     * Loads the graph from the defined JSON file.
     */
    public static loadFile(fileName : string) : JsonNode[] {
        console.log('Starting to load graph from %s', fileName);
        let handle : any = fs.readFileSync(fileName);
        let data : JsonNode[] = JSON.parse(handle);
        console.log('Loaded graph from %s with %d nodes', fileName, data.length);
        return data;
    }
}