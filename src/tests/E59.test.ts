import AVLTree from "../E59";


test("Basic test", () => {
    const tree = new AVLTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

const treeString = tree.printTopToBottom();
expect(treeString).toBe("4 2 6 1 3 5 7 ");
});