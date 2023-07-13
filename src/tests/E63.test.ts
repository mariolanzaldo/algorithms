import findCycles from "../E63";
import Graph from "../utils/Graph";

test("Basic test", () => {
    const graph = new Graph();
    ["A", "B", "C", "D", "E", "F"].forEach((vertex) => graph.addVertex(vertex));

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'A');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'D');

    const output = findCycles(graph);
    expect(output).toEqual([
        ['A', 'B', 'C'],
        ['D', 'E', 'F']
    ]);
});