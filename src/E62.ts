import Graph from "./utils/Graph";

function dfsTopSortHelper(v: string, n: number, visited: { [key: string]: boolean }, topNums: { [key: string]: number }, graph: Graph<{ [key: string]: string }>): number {
    visited[v] = true;
    const neighbors = graph.adjacencyList[v];

    for(const neighbor of neighbors) {
        if(!visited[neighbor]) {
            n = dfsTopSortHelper(neighbor, n, visited, topNums, graph);
        }
    }

    topNums[v] = n;
    return n - 1;
};

function dfsTopologicalSort(graph: Graph<{ [key: string]: string }>): { [key: string]: number } {
    const vertices = Object.keys(graph.adjacencyList);
    const visited: { [key: string]: boolean } = {};
    const topNums: { [key: string]: number } = {};
    let n = vertices.length - 1;

    for(const v of vertices) {
        if(!visited[v]) {
            n = dfsTopSortHelper(v, n, visited, topNums, graph);
        }
    }

    return topNums;

}

export default dfsTopologicalSort;