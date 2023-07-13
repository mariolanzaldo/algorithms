import Graph from "./utils/Graph";

function findCycles(graph: Graph<{ [key: string]: string }>): string[][] {
    const graphNodes = Object.keys(graph.adjacencyList);
    const visited: { [key: string]: boolean } = {};
    const recStack: { [key: string]: boolean } = {};
    const cycles: string[][] = [];
  
    for (let i = 0; i < graphNodes.length; i++) {
      const node = graphNodes[i];
      findCycleHelper(graph, node, visited, recStack, [], cycles);
    }
  
    return cycles;
  };
  
  function findCycleHelper( graph: Graph<{ [key: string]: string }>, vertex: string, visited: { [key: string]: boolean }, recStack: { [key: string]: boolean }, path: string[], cycles: string[][]) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      recStack[vertex] = true;
      path.push(vertex);
  
      const nodeNeighbors = graph.adjacencyList[vertex];
  
      for (let i = 0; i < nodeNeighbors.length; i++) {
        const currentNode = nodeNeighbors[i];
  
        if (!visited[currentNode]) {
          findCycleHelper(graph, currentNode, visited, recStack, path, cycles);
        } else if (recStack[currentNode]) {
          const cycle = path.slice(path.indexOf(currentNode));
          cycles.push(cycle);
        }
      }
    }
  
    recStack[vertex] = false;
    path.pop();
  };
  
export default findCycles;