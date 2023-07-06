import AVL from "../E58";

test("Basic test", () => {
    const alv = new AVL();
    alv.insert(15);
    alv.insert(25);
    alv.insert(10);
    alv.insert(7);
    alv.insert(22);

    const node = alv.find(alv.root, 10);
    expect(node.value).toBe(10);
});

test("Should fail", () => {
    const alv = new AVL();
    alv.insert(15);
    alv.insert(25);
    alv.insert(10);
    alv.insert(7);
    alv.insert(22);

    const node = alv.find(alv.root, 100);
    expect(node).toBeFalsy();
})