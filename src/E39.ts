function getSecondLargest(array: number[]): number | null {
    let max = -Infinity;
    let result = -Infinity;

    for(const value of array) {
        if(value > max) {
            [result, max] = [max, value];
        } else if (value < max && value > result) {
            result = value;
        }
    }
    return result === -Infinity ? null : result;
};

export default getSecondLargest;