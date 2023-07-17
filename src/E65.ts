import Graph from "./utils/Graph";

function shortestPath(graph: Graph<{ [key: string]: string[]; }>, start: string, end: string): string[] | null {

    if(!graph.adjacencyList[start] || !graph.adjacencyList[end]) {
        return null;
    }

    const queue: string[] = [start];
    const visited: Record<string, boolean> = { [start]: true };
    const parents: Record<string, string | null> = { [start]: null};

    while(queue.length > 0) {
        const vertex = queue.shift()!;
        
        if(vertex === end) {
            return constructPath(parents, start, end);
        }
        
        const neighbors = graph.adjacencyList[vertex];

        for(const neighbor of neighbors) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                parents[neighbor] = vertex;
            }
        }
    }
    return null;
};

function constructPath(parents: Record<string, string | null>, start: string, end: string): string[] {
    const path: string[] = [];
    let current = end;

    while(current !== start) {
        path.unshift(current);
        current = parents[current]!;
    }
    path.unshift(start);

    return path;
}

export default shortestPath;