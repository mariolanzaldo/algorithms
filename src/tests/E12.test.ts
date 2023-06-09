import CircularQueue from "../E12";

describe("Basic tests", () => {
    const queue = new CircularQueue(5);
    const isEmpty = queue.isEmpty();

    test("Checking if the queue is empty", () => {
        expect(isEmpty).toBeTruthy();
    });

    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    queue.enQueue(4);
    queue.enQueue(5);

    test("Checking if the queue is full", () => {
        const isFull = queue.isFull();
        expect(isFull).toBeTruthy();
    });

    test("Checking out dequeue", () => {
        const dequeuedEl = queue.dequeue();
        expect(dequeuedEl).toBe(1);
    });

    test("Checking out peek", () => {
        const peek = queue.peek();
        expect(peek).toBe(2);
    });

    test("Enqueue again and print", () => {
        queue.enQueue(6);
        const modifiedQueue = queue.print();
        const peek = queue.peek();

        expect(modifiedQueue).toStrictEqual([6, 2, 3, 4, 5]);
        expect(peek).toBe(2);
    });
});