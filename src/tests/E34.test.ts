import linkedListMergeSort from "../E34";
import { LinkedList } from "../utils/LinkedList";


test("Basic test", () => {

    const linkedList = new LinkedList();
    const output: number[] = [];

    linkedList.add(5);
    linkedList.add(4);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(1);
   
    
    let { head } = linkedListMergeSort(linkedList);

    while(head) {
        output.push(head.value);
        head = head.next;
    }

    expect(output).toStrictEqual([1, 2, 3, 4, 5]);

});