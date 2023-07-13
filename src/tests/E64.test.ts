import GraphM from "../E64";

test("Basic test", () => {
    const graph = new GraphM(4);

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.matrix).toEqual([[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]);
    expect(graph.adjacencyList).toEqual({'0': [1, 2], '1': [3], '2': [3], '3': []});
});