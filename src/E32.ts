import { Node } from "./utils/LinkedList";

function findStartOfLoop<T>(head: Node<T>) {

    if(!head || !head.next) return null;

    let slow: any = head;
    let fast: any = head;

    slow = slow.next;
    fast = fast.next.next;

    while(true) {
        if(slow == fast) break;

        slow = slow.next;
        fast = fast.next.next;
    }

    if(slow != fast) return null;
    
    slow = head;

    while(true) {
        if(slow == fast) break;

        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

export default findStartOfLoop;