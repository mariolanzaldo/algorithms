export default class Graph<T>{
    adjacencyList: { [key: string]: string[] };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList[v1].push(v2);
    }
};