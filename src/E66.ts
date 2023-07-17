import Graph from "./utils/Graph";
interface Translation {
    letter1: string;
    letter2: string;
}

function translateLetters(translations: Translation[], wordPairs: string[][]): string[] {
    const graph = new Graph<string>();
    const output: string[] = [];

    for(const translation of translations) {
        const { letter1, letter2 } = translation;
        graph.addVertex(letter1);
        graph.addVertex(letter2);

        graph.addEdge(letter1, letter2);
    }

    for(const [word1, word2] of wordPairs) {
        const isMatch = checkWordPair(graph, word1, word2);
        isMatch ? output.push('yes') : output.push('no');
    }

    return output;
};

function checkWordPair (graph: Graph<string>, word1: string, word2: string): boolean {
    if(word1.length !== word2.length) {
        return false;
    }

    for(let i = 0; i < word1.length; i++) {
        const letter1 = word1[i];
        const letter2 = word2[i];

        if(letter1 !== letter2 && !hasPath(graph, letter1, letter2)) {
            return false;
        }
    }

    return true;
};

function hasPath(graph: Graph<string>, start: string, end: string): boolean {
    const visited: Record<string, boolean> = {};
    const queue: string[] = [start];
    visited[start] = true;

    while(queue.length > 0) {
        const vertex = queue.shift()!;
        if(vertex === end) {
            return true;
        }

        const neighbors = graph.getNeighbors(vertex);

        for(const neighbor of neighbors) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return false;
}
export default translateLetters;