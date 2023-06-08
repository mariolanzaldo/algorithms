function reverseBlocks(array: number[], blockSize: number): number[] {

    for(let i = 0; i < array.length; i += blockSize) {
        let left = i;

        let right = Math.min(i + blockSize - 1, array.length - 1);

        while(left < right) {
            swap(array, left++, right--);

        }
    }

    return array;
};

function swap(array: number[], i:number, j: number): number[] {
    [array[i], array[j]] = [array[j], array[i]];
    return array;
};

export default reverseBlocks;