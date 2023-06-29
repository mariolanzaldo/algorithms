import MaxHeap from "./utils/maxHeap";

function kthLargest(array: number[], k: number): number[] | null {
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

    if(result.includes(null)) {
        return null;
    }
        
    result = result.slice().sort((a, b) =>  a - b);

    return result;
};

export default kthLargest;