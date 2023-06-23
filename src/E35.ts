import { LinkedList } from "./utils/LinkedList";

function isPalindrome<T> (linkedList: LinkedList<T>): Boolean {
    let temp = linkedList.head;
    let stack = [];
    if(linkedList.head === null) {
        return true;
    }

    while(temp !== null) {
        stack.push(temp.value);
        temp = temp.next;
    }

    let temp2 = linkedList.head;
    let length = stack.length;

    while(temp2 !== null) {
        let lastNum = stack.pop();

        if(temp2.value !== lastNum) {
            return false;
        }

        if(length / 2 === stack.length) {
            return true;
        }

        temp2 = temp2.next
    }

    return true;
};

export default isPalindrome;