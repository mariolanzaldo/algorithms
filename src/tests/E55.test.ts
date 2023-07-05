import isMirrored from "../E55";
import Node from "../utils/Node";


test("Basic test", () => {

    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.left.right = new Node(4);
    root.right.left = new Node(4);
    root.right.right = new Node(3);

    const isSymmetric = isMirrored(root);
    expect(isSymmetric).toBeTruthy();
});

test("Right side is bigger", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.right.left = new Node(4);
    root.right.right = new Node(3);

    const isSymmetric = isMirrored(root);
    expect(isSymmetric).toBeFalsy();
});

test("Left side is bigger", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.left.right = new Node(4);
    root.right.right = new Node(3);

    const isSymmetric = isMirrored(root);
    expect(isSymmetric).toBeFalsy();
});