import MaxHeap from "./utils/maxHeap";

export default class PriorityQueue<T> {
    heap = new MaxHeap<[number, T]>();

    enqueue(element: T, priority: number) {
        return this.heap.add([priority, element]);
    }

    dequeue (){ 
        const max = this.heap.remove() as [number, T];
        return max[1];
    }

    peek() {
        if(this.heap.heap.length === 0) return null;

        return this.heap.peek()[1];
    }
};