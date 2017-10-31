// src/app.ts

import GraphLoader from './GraphLoader';
import JsonNode from './struct/JsonNode';

let data: JsonNode[] = GraphLoader.loadFile('./src/data/graph.json');