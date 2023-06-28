import { PriorityQueue } from "../E37";

test("Starts empty", () => {
    const queue = new PriorityQueue();
    const size = queue.size();


    expect(size).toBe(0);
    expect(queue.head).toBeFalsy();
});

test("Adding elements", () => {
    const queue = new PriorityQueue();
    queue.enqueue(200, 2);
    queue.enqueue(100, 1);
    queue.enqueue(300, 3);

    const size = queue.size();
    expect(size).toBe(3);
});

test("Detect the peek of highest priority", () => {
    const queue = new PriorityQueue();
    queue.enqueue(200, 2);
    queue.enqueue(100, 1);
    queue.enqueue(300, 3);

    const peek = queue.peek();
    expect(peek).toBe(100);
});

test("Dequeue elements in order", () => {
    const queue = new PriorityQueue();
    queue.enqueue(200, 2);
    queue.enqueue(100, 1);
    queue.enqueue(300, 3);

    const firstValue = queue.dequeue();
    const secondValue = queue.dequeue();
    const thirdValue = queue.dequeue();

    expect(firstValue).toBe(100);
    expect(secondValue).toBe(200);
    expect(thirdValue).toBe(300);
    
    const finalSize = queue.size();
    expect(finalSize).toBe(0);
    expect(queue.head).toBeFalsy();

});