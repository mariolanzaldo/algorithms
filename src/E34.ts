import { LinkedList, Node } from "./utils/LinkedList";

function linkedListMergeSort<T>(linkedList: LinkedList<T>): LinkedList<T> {

    if(!linkedList.head) {
        return linkedList;
    }

    linkedList.head = mergeSort(linkedList.head);
    return linkedList;
};

function mergeSort<T>(head: Node<T> | null): Node<T> | null {
    
    if(head === null || head.next === null) {
        return head;
    }

    let middle: any= getMiddleNode(head);
    let middleNext = middle.next;
    middle.next = null;

    let left: any= mergeSort(head);
    let right: any = mergeSort(middleNext);
    
    return sortMerge(left, right);
};

function getMiddleNode<T> (head: Node<T> | null) {
    if(!head || !head.next) {
        return null;
    }

    let fast: Node<T> | null = head.next;
    let slow: any = head;

    while(fast && fast.next) {
        slow = slow?.next;
        fast = fast.next.next;
    }

    return slow;
};

function sortMerge<T>(left: Node<T> | null, right: Node<T> | null) {
    let result: any = null;

    if(left === null) {
        return right;
    } else if(right === null) {
        return left;
    }

    if(left.value >= right.value) {
        result = right;
        result.next = sortMerge(left, right.next);
    } else {
        result = left;
        result.next = sortMerge(left.next, right);
    }

    return result;
};

export default linkedListMergeSort;