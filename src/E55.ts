import Node from "./utils/Node";

function isMirrored<T>(tree: Node<T>): boolean {
    if(!tree) {
        return true;
    }

    const { left, right } = tree; 
    const stack = [left, right];

    while(stack.length > 0) {
        const node1 = stack.pop();
        const node2 = stack.pop();

        if(!node1 && !node2) {
            continue;
        }

        if(!node1 || !node2 ) {
            return false;
        }

        if(node1.value !== node2.value) {
            return false;
        }

        stack.push(node1.left);
        stack.push(node2.right);
        stack.push(node1.right);
        stack.push(node2.left);
    }

    return true;
};

export default isMirrored;