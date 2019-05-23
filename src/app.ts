import Server from "./Server";

const port = Number(process.env.PORT || 8081);
// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
new Server(port, "./src/data/graph_small.json");
