import { LinkedList, Node } from "./utils/LinkedList";

function getNode<T>(linkedList: LinkedList<T>, num: number) {
    let nodeToCheck = linkedList.head;
    let count = 0;
    
    if(num > linkedList.length) throw new Error("Doesn't Exist!");
    
    while(count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    return nodeToCheck;
};

export default getNode;