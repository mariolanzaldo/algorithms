import findMiddleNode from "../E31";
import { LinkedList } from "../utils/LinkedList";

test("Basic test", () => {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    const { value } = findMiddleNode(linkedList);
    expect(value).toBe(3);
});

test("Should work with an even linked list", () => {

    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const { value } = findMiddleNode(linkedList);
    expect(value).toBe(3);
});

