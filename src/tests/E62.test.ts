import dfsTopologicalSort from "../E62";
import Graph from "../utils/Graph";

test("Basic test", () => {
    const graph = new Graph();
    ["A", "B", "C", "D", "E"].forEach((vertex) => graph.addVertex(vertex));


    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "D");
    graph.addEdge("D", "E");
    graph.addEdge("E", "B");


    const output = dfsTopologicalSort(graph);

    expect(output).toEqual({
        E: 4,
        D: 3,
        B: 2,
        C: 1,
        A: 0
    });
});