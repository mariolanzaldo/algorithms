export class Node<T>{
    value: any;
    next: Node<T> | null;
    priority: number;
    constructor(value: any, priority: number) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

export class PriorityQueue <T>{
    head: Node<T> | null;
    length: number;
    constructor(){
        this.head = null;
        this.length = 0;
    }

    enqueue(element: any, priority: number) {
        let node = new Node(element, priority);
        this.length++;

        if(!this.head) {
            this.head = node;
        } else {
            let temp: Node<T> | null = this.head;
            let previous: Node<T> | null = null;
            while((temp !== null) && (temp.priority <= priority)) {
                        previous = temp;
                        temp = temp.next;
            }

            node.next = temp;

            if(previous !== null) {
                previous.next = node;
            } else {
                this.head = node;
            }
        }

        // if(this.front == null){ 
        //     this.front = node;
        //     this.rear = node;
        // } else {
        //     let temp: Node<T> | null = this.front;
        //     let previous: Node<T> | null = null;

        //     while((temp !== null) && (temp.priority <= priority)) {
        //         previous = temp;
        //         temp = temp.next;
        //     }

        //     node.next = temp;

        //     if(previous !== null) {
        //         previous.next = node;
        //     } else {
        //         this.front = node;
        //     }

        //     if(node.next === null) {
        //         this.rear = node;
        //     }
        // }
    }

    dequeue() {
        if(this.head === null) {
           return null; 
        } else {
            this.length--;
            let temp: Node<T> | null = this.head;
            this.head = this.head.next;
            return temp.value;
        }

    }

    peek() {
        return this.head?.value;
    }

    size() {
        return this.length;
    }

};