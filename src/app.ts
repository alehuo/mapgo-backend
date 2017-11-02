// src/app.ts

import GraphLoader from './GraphLoader';
import JsonNode from './interface/JsonNode';
import Edge from './struct/Edge';
import Dijkstra from './algo/Dijkstra';
import ArrayList from './struct/ArrayList';

/**
 * Just testing Dijkstra's algorithm.
 * 
*/

let data : ArrayList < Edge > [] = GraphLoader.loadFile('./src/data/graph.json');

let dijkstra : Dijkstra = new Dijkstra(data);

console.log(dijkstra.shortestDistances(0));
dijkstra.writeShortestPath(15481);