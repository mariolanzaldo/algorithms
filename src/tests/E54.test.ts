import Trie from "../E54";


test("Basic test", () => {

    const dictionary = [
        { word: 'dog', meaning: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, nonretractable claws, and a barking, howling, or whining voice.' },
        { word: 'cat', meaning: 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.'},
        { word: 'Earth', meaning: 'The planet on which we live; the world.' },
        { word: 'strawberry', meaning: 'A sweet soft red fruit with a seed-studded surface.'},
        { word: 'porcupine', meaning: 'A large rodent with defensive spines or quills on the body and tail.'},
    ];

    const trie = new Trie();

    for(const {word, meaning} of dictionary) {
        trie.add(word, meaning);
    }

    const found = trie.search('dog');
    expect(found?.meaning).toBe("A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, nonretractable claws, and a barking, howling, or whining voice.");

    const failed = trie.search('dogo');
    expect(failed).toBeFalsy();
});