import Server from './Server';

// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
let server: Server = new Server(8080, './src/data/graph_small.json');