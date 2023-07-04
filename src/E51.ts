import Node from "./utils/Node";

function LCA<T> (root: any, node1: any, node2: any): Node<T> {
    if(root === null || root === node1 || root === node2) {
        return root;
    }

    const left = LCA(root.left, node1, node2);
    const right = LCA(root.right, node1, node2);

    if(left && right) {
        return root;
    }

    return left ? left : right;
};

export default LCA;