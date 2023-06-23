import reverseLinkedList from "../E36";
import { LinkedList } from "../utils/LinkedList";


test("Basic test", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const expectedList = [4, 3, 2, 1];
    const output: number[] = [];

    let { head } = reverseLinkedList(linkedList);

    while(head) {
        output.push(head.value);
        head = head.next;
    }

    expect(output).toStrictEqual(expectedList);
});