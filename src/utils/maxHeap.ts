class MaxHeap <T>{
    heap: any[];
    constructor() {
        this.heap = [];
    }
    
    getLeftChildIndex(parentIndex: number) { 
        return 2 * parentIndex + 1; 
    }
    getRightChildIndex(parentIndex: number) { 
        return 2 * parentIndex + 2; 
    }
    
    getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }
    
    hasLeftChild(index: number) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    
    hasRightChild(index: number) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    
    hasParent(index: number) {
        return this.getParentIndex(index) >= 0;
    }
    
    leftChild(index: number) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    
    rightChild(index: number) {
        return this.heap[this.getRightChildIndex(index)];
    }
    
    parent(index: number) {
        return this.heap[this.getParentIndex(index)];
    }
    
    swap(index1: number, index2: number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }
     
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    
    add(item: any) {
        this.heap.push(item);
        this.heapifyUp();
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }
     
    // printHeap() {
    //     var heap =` ${this.heap[0]} `
    //     for(var i = 1; i<this.heap.length;i++) {
    //         heap += ` ${this.heap[i]} `;
    //     }
    //     console.log(heap);
    // }
   };

   export default MaxHeap;