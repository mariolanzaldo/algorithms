function cars(arr: number[]) {
    let count = 0;
    let result = 0;
    // let n = arr.length;


    for(let i = arr.length - 1; i >= 1; i--) {
        if(arr[i - 1] === 1) {
            count++;
        } else {
            result += count;
        }
    }
    
    return result;
};

export default cars;