import getNode from "../E33";
import { LinkedList } from "../utils/LinkedList";


test("Should return the last element", () => {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const { value } = getNode(linkedList, 3);
    expect(value).toBe(4);
});

test("Should return the first element", () => {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const { value } = getNode(linkedList, 0);
    expect(value).toBe(1);
});