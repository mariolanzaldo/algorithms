interface TrieNode {
    children: any;
    isEndOfWord: boolean;
    meaning: string | null;
};

interface Trie {
    root: TrieNode;
}

class TrieNode implements TrieNode {
    
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
        this.meaning = null;
    }
};

class Trie implements Trie{
    constructor() {
        this.root = new TrieNode();
    }

    add(word: string, meaning: string = "") {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            const char = word[i];

            if(!currentNode?.children.has(char)) {
                currentNode?.children.set(char, new TrieNode());
            }

            currentNode = currentNode?.children.get(char);
        }

        currentNode.isEndOfWord = true;
        currentNode.meaning = meaning;
    }

    search(word: string) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            const char = word[i];

            if(!currentNode.children.has(char)){
                return null;
            }

            currentNode = currentNode.children.get(char);
        }

        return currentNode;
    }
};

export default Trie;