function swapArr (array: number[]): number[] {
    let temp = array.map(element => element);
    
    for(let i = 0; i < array.length; i++) {
        array[i] = temp[array[i]];
    }

    return array;
}

export default swapArr;