function arraySum (arr1: number[], arr2: number[]): number[] {
    const output = [];
    const bigger = arr1.length >= arr2.length ? arr1 : arr2;
    const smaller = bigger == arr2 ? arr1 : arr2;

    let residual = 0;

    while(bigger.length) {
        const digitsFromBigger = bigger.pop() ?? 0;
        const digitsFromSmaller = smaller.pop() ?? 0;

        let sum = digitsFromBigger + digitsFromSmaller + residual;

        if(sum > 9) {
            residual = 1;
            sum -= 10;

            output.unshift(sum);
        } else {
            residual = 0;
            output.unshift(sum);
        }
    }

     if(residual === 1) {
        output.unshift(residual);
     }

    return output;
};

export default arraySum;