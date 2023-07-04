import Node from "./utils/Node";

function isSameLevel <T>(root: Node<T>, n1: number, n2: number): boolean {
    const queue: any[] = [];

    if(!root) { 
        return false;
    }
    queue.push({ node: root, depth: 0});

    let foundn1 = false;
    let foundn2 = false;
    let depthn1 = -1;
    let depthn2 = -1;

    while(queue.length > 0) {
        const { node, depth } = queue.shift();
        const {value, left, right} = node;
        
        if(value === n1) {
            foundn1 = true;
            depthn1 = depth;
        } else if (value === n2) {
            foundn2 = true;
            depthn2 = depth;
        }

        if(foundn1 && foundn2) {
            break;
        }

        if(left) {
            queue.push({ node: left, depth: depth + 1});
        }

        if(right) {
            queue.push({node:  node.right, depth: depth + 1});
        }
    }

    if(depthn1 === depthn2 && (foundn1 && foundn2)) {
        return true;
    } 

    return false;
};

export default isSameLevel;