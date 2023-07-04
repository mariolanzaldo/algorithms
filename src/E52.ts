import Node from "./utils/Node";

export function PrintTopToDown<T>(root: Node<T> | null): any[] {
    const output: any[] = [];
    if(root === null) {
        return output;
    }
    const queue: any[] = [root];

   while(queue.length > 0) {
    const queueLength = queue.length;
    const currentLevel = [];

    for(let i = 0;i < queueLength; i++) {
        const {value, left, right } = queue.shift();
        currentLevel.push(value);

        if(left) {
            queue.push(left);
        }

        if(right) {
            queue.push(right);
        }
    } 

    output.push(currentLevel);
   }

   return output;
};

