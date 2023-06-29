function missingNumber(array: number[]) {
    let x1 = array[0];
    let x2 = 1;

    for(let i = 1; i < array.length; i++) {
        const element = array[i];
        x1 = x1^element;
    }

    for(let j = 2; j <= array.length + 1; j++) {
        x2 = x2^j;
    }
    
    const output = x1^x2;
    return output;
};

export default missingNumber;