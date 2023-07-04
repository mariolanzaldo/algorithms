import isSameLevel from "../E53";
import Node from "../utils/Node";

test("At the same level", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);

        const test1 = isSameLevel(root, 6, 7);
        expect(test1).toBeTruthy();

        const test2 = isSameLevel(root, 4, 7);
        expect(test2).toBeTruthy();
});

test("Not at the same level", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

    const test1 = isSameLevel(root, 1, 7);
    expect(test1).toBeFalsy();

    const test2 = isSameLevel(root, 3, 7);
    expect(test2).toBeFalsy();
});