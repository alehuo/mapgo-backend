// src/app.ts

import * as Utils from './utils';
import JsonNode from './interface/JsonNode';
import Edge from './struct/Edge';
import Dijkstra from './algo/Dijkstra';
import ArrayList from './struct/ArrayList';

/**
 * Just testing Dijkstra's algorithm.
 *
*/

let data : ArrayList < Edge > [] = Utils
    .GraphLoader
    .loadFile('./src/data/graph.json');

let dijkstra : Dijkstra = new Dijkstra(data);

console.log(dijkstra.shortestDistances(0));