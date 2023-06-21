interface Queue {
    items: string[];
    count: number;
    lowestCount: number;
}

class Queue implements Queue {
    constructor() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    enqueue(element: any) {
        this.items.push(element);
        this.count++;
    }

    dequeue() {
        if(this.iseEmpty()) return;

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    size() {
        return this.count - this.lowestCount;
    }

    iseEmpty() {
        return this.size() === 0;
    }

};

export default Queue;