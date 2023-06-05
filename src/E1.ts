function maxNumber(array: number[]): number {
    const initialValue = 0;
    const output = array.reduce((element, max) => element > max ? element : max, initialValue);
    return output;
};


export default maxNumber;