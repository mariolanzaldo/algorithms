import isPalindrome from "../E35";
import { LinkedList } from "../utils/LinkedList";


test("It is a plindrome", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(1);

    const isPalin = isPalindrome(linkedList);
    expect(isPalin).toBeTruthy();
});

test("It should return false", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(1);

    const isPalin = isPalindrome(linkedList);
    expect(isPalin).toBeFalsy();
});