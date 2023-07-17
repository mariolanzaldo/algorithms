import shortestPath from "../E65";
import Graph from "../utils/Graph";


test("Basic test", () => {
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addVertex("7");

    graph.addEdge("2", "1");
    graph.addEdge("1", "0");
    graph.addEdge("0", "3");
    graph.addEdge("3", "7");
    graph.addEdge("3", "4");
    graph.addEdge("4", "7");
    graph.addEdge("4", "6");
    graph.addEdge("4", "5");
    graph.addEdge("5", "6");
    graph.addEdge("7", "6");

    const startVertex = "0";
    const endVertex = "7";

    const path = shortestPath(graph, startVertex, endVertex);
    expect(path).toEqual(["0", "3", "7"]);
});