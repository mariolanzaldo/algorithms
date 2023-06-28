// class MaxHeap <T>{
//     values: any;
//     constructor() {
//         this.values = [];
//     }

//     parent(index: number) {
//         return Math.floor((index - 1) / 2);
//     }

//     leftChild(index: number) {
//         return (index * 2) + 1;
//     }

//     rightChild(index: number) {
//         return (index * 2) + 2;
//     }

//     isLeaf(index: number) {
//         return (
//             index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
//         )
//     }

//     swap(index1: number, index2: number) {
//         [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
//     }


//     heapifyDown(index: number) {

//         if (!this.isLeaf(index)) {

//             let leftChildIndex = this.leftChild(index),
//                 rightChildIndex = this.rightChild(index),

//                 largestIndex = index;

//             if (this.values[leftChildIndex] > this.values[largestIndex]) {
//                 largestIndex = leftChildIndex;
//             }

//             if (this.values[rightChildIndex] >= this.values[largestIndex]) {
//                 largestIndex = rightChildIndex;
//             }

//             if (largestIndex !== index) {
//                 this.swap(index, largestIndex);
//                 this.heapifyDown(largestIndex);
//             }
//         }
//     }

//     heapifyUp(index: number) {
//         let currentIndex = index,
//             parentIndex = this.parent(currentIndex);

//         while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
//             this.swap(currentIndex, parentIndex);
//             currentIndex = parentIndex;
//             parentIndex = this.parent(parentIndex);
//         }
//     }

//     add(element: any) {
//         this.values.push(element);
//         this.heapifyUp(this.values.length - 1);
//     }

//     peek() {
//         return this.values[0];
//     }

//     extractMax() {
//         if (this.values.length < 1) return 'heap is empty';

//         const max = this.values[0];
//         const end = this.values.pop();
        
//         this.values[0] = end;
//         this.heapifyDown(0);

//         return max;
//     }

//     // buildHeap(array: any[]) {
//     //     this.values = array;
//     //     // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
//     //     for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
//     //         this.heapifyDown(i);
//     //     }
//     // }

//     size() {
//         return this.values.length;
//     }

//     print() {
//         let i = 0;
//         while (!this.isLeaf(i)) {
//             console.log("PARENT:", this.values[i]);
//             console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
//             console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
//             i++;
//         }      
//     }
// }

class MaxHeap <T>{
    heap: any[];
    constructor() {
        this.heap = [];
    }
    
    // Helper Methods
    getLeftChildIndex(parentIndex: number) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex: number) { return 2 * parentIndex + 2; }
    
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
    
    swap(indexOne: number, indexTwo: number) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
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
     
    printHeap() {
        var heap =` ${this.heap[0]} `
        for(var i = 1; i<this.heap.length;i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
    }
   }
function kthLargest(array: number[], k: number) {
    let heap = new MaxHeap();
    let result = [];
    let counter = 0;

    for(const number of array) {
        heap.add(number);
    }
    
    while(counter !== k ){
        result.push(heap.remove());
        counter++;
    }

            
    result = result.slice().sort((a, b) =>  a - b);

    return result;
};


const array = [12, 3, 5, 7, 10];
const k = 2;

const output = kthLargest(array, k);
console.log(output);
export default kthLargest;