import Trie from "./E54";

function wordFinderFromStream(stream: any, words: string[]): boolean {
    const trie = new Trie();
    for(const word of words) {
        trie.add(word);
    }

    let next = stream.next();
    let done = next.done;
    let node = trie.root;

    while(next.value) {
        const { value } = next;
        node = node?.children.get(value);

        if(!node) {
            return false;
        }

        done = next.done;
        next = stream.next();

        if(node.isEndOfWord) {
            return true;
        }
    }

    return false;
};

// const wordArr = ["f", "u", "n"];
// const wordArr = ["f", "u", "a"];
// const generator = wordArr[Symbol.iterator]();
// const output = wordFinder(generator, ["foo", "bar", "fun"]);
// console.log(output);

export default wordFinderFromStream;