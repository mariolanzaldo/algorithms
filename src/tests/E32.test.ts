import findStartOfLoop from "../E32";
import { LinkedList } from "../utils/LinkedList";

test("Basic test", () => {

    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const cycleList = linkedList.makeLoop(linkedList.head, 2);
    const { value } = findStartOfLoop(cycleList);
    expect(value).toBe(2);

});