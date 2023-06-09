class CircularQueue<T> {
    items: any[];
    size: number;
    currentLength: number;
    rear: number;
    front: number;

    constructor(size: any) {
        this.items = new Array(size);
        this.size = size;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.size;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enQueue(element: any) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.size;
            this.items[this.rear] = element;
            this.currentLength += 1;

            if(this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.currentLength -= 1;

        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front];
        }

        return null;
    }

    print() {
        if(this.isEmpty()) {
            console.log(`The queue is empty`);
        } else {
            return this.items.filter((element) =>  element !== undefined);
        }
    }

}

export default CircularQueue;