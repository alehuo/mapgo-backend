import Server from './Server';
import Heap from './struct/Heap';
import Comparator from './interface/Comparator';
let port: any = process.env.PORT || 8081;
// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
let server: Server = new Server(port, './src/data/graph_small.json');

//import Server from './Server';
//let port: any = process.env.PORT || 8081;
// Opens a server at a predefined port. Loads a graph into memory and allows drawing maps using various path finding algorithms.
//let server: Server = new Server(port, './src/data/graph_small.json');
/*
class Cmpr implements Comparator<number> {
    compare(t1: number, t2: number): number {
        return t1 - t2;
    }

}

for (let i = 1; i <= 2000000000; i *= 2) {
    let time: number = 0;
    // Test each thing for 10 times, take average
    for (let j = 0; j < 10; j++) {
        let heap: Heap<number> = new Heap<number>(new Cmpr());
        // Time start
        let startTime: number = new Date().getTime();
        for (let k = 1; k <= i; k++) {
            heap.heapInsert(Math.floor(Math.random() * 100000));
        }
        // Time end
        let delta: number = new Date().getTime() - startTime;
        time += delta;
    }
    console.log("%d;%f", i, time / 10);
}

let totalDeltas: number = 0;
let n: number = 0;

while(true) {
    let heap: Heap<number> = new Heap<number>(new Cmpr());
    let startTime: number = new Date().getTime();
    let num: number = 100000;
    for (let i = 1; i <= 100000; i++) {
        heap.heapInsert(Math.floor(Math.random()*1000000));
        num--;
    }
    // Time end
    let delta: number = new Date().getTime() - startTime;
    //console.log("Inserting 100M elements took %f ms", delta);
    let startTime2: number = new Date().getTime();
    while (!heap.isEmpty()) {
        heap.heapDelMin();
    }
    let delta2: number = new Date().getTime() - startTime2;
    
    let totalDelta: number = delta / delta2;
    totalDeltas += totalDelta;
    n++;
    console.log(totalDeltas / n);
}
console.log("Removing 100M elements took %f ms", delta2);
console.log("Analyzed time complexity, heapInsert / heapDelMin is %f.*/