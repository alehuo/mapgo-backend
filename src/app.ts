// src/app.ts

import * as Utils from './utils';
import JsonNode from './interface/JsonNode';
import Dijkstra from './algo/Dijkstra';
import {Edge, ArrayList, Tuple, Coordinate} from './struct';
import * as express from 'express';
import Server from './Server';

// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
let server: Server = new Server(8080, './src/data/graph_small.json');