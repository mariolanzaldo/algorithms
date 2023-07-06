import BST from "../E57";


test("Basic Test", () => {

    const bst = new BST();
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    
    let isValueOnBST = bst.isOnTree(22);

    expect(isValueOnBST).toBeTruthy();

    bst.remove(22);
    
    isValueOnBST = bst.isOnTree(22);
    expect(isValueOnBST).toBeFalsy();
});