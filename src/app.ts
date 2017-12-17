import Server from './Server';
import Heap from './struct/Heap';
import Comparator from './interface/Comparator';
let port: any = process.env.PORT || 8081;
// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
let server: Server = new Server(port, './src/data/graph_small.json');