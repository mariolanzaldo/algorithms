import { LinkedList } from "./utils/LinkedList";


function reverseLinkedList<T>(linkedList: LinkedList<T>): LinkedList<T> {

    if(linkedList.head === null || linkedList.length < 2) {
        return linkedList;
    }

    let current = linkedList.head;
    let previous, next;

    while(current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    linkedList.head = previous;
    return linkedList;
};

export default reverseLinkedList;