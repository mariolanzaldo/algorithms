import LCA from "../E51";
import Node from "../utils/Node";


test("Basic test", () => {
        const root = new Node(3);
        root.left = new Node(5);
        root.right = new Node(1);
        root.left.left = new Node(6);
        root.left.right = new Node(2);
        root.right.left = new Node(0);
        root.right.right = new Node(8);
        root.left.right.left = new Node(7);
        root.left.right.right = new Node(4);

        const node1 = root.left;
        const node2 = root.right;

        const output = LCA(root, node1, node2);
        expect(output.value).toBe(3);
});