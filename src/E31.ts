import { LinkedList, Node } from "./utils/LinkedList";

function findMiddleNode<T>(linkedList: LinkedList<T>) {

    const head = linkedList.head;

    if(head === null) {
        return null;
    }

    let fast: Node<T> | null = head;
    let slow: any = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

export default findMiddleNode;