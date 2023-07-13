export default class GraphM {

    matrix: number[][];
    adjacencyList: { [key: number]: number[] };
    constructor(numNodes: number) {
        this.matrix = [];
        this.adjacencyList = {};
        for(let i = 0; i < numNodes; i++) {
            this.matrix.push( new Array(numNodes).fill(0));
        }
    }

    addVertex(vertex: number) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(fromNode: number, toNode: number) {
        this.matrix[fromNode][toNode] = 1;
        this.matrix[toNode][fromNode] = 1;
        this.adjacencyList[fromNode].push(toNode);
    }

    isEdge(fromNode: number, toNode: number) {
        return this.matrix[fromNode][toNode] === 1;
    }
};