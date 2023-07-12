import PriorityQueue from "../E60";

// import PriorityQueue from "../E60"

test("Starts empty", () => {
    const pq = new PriorityQueue();
    const pqSize = pq.heap.heap.length;

    expect(pqSize).toBe(0);
});

test("Adding elements", () => {
    const pq = new PriorityQueue();
    pq.enqueue(3, 3);
    pq.enqueue(2, 2);
    pq.enqueue(2, 1);
    const pqSize = pq.heap.heap.length;

    expect(pqSize).toBe(3);
});

test("Get the highst priority element", () => {
    const pq = new PriorityQueue();
    pq.enqueue(3, 3);
    pq.enqueue(2, 2);
    pq.enqueue(2, 1);

    const peek = pq.peek();
    expect(peek).toBe(3);
});

test("Dequeue elements in priority order", () => {
    const pq = new PriorityQueue();
    pq.enqueue(3, 3);
    pq.enqueue(1, 1);
    pq.enqueue(2, 2);

    const element1 = pq.dequeue();
    expect(element1).toBe(3);
    expect(pq.heap.heap.length).toBe(2);

    const element2 = pq.dequeue();
    expect(element2).toBe(2);
    expect(pq.heap.heap.length).toBe(1);

    const element3 = pq.dequeue();
    expect(element3).toBe(1);
    expect(pq.heap.heap.length).toBe(0);
});

// test("starts empty", () => {
//     const tree = new PriorityQueue();
//     const pqSize = tree.values.length;

//     expect(pqSize).toBe(0);
// });

// test("Adding elements", () => {
//     const pq = new PriorityQueue();
//     pq.enqueue(3, 3);
//     pq.enqueue(1, 1);
//     pq.enqueue(2, 2);
//     const pqSize = pq.values.length;

//     expect(pqSize).toBe(3);
// });