function majorityNumber(numbers: number[]): number | null {
    let majority = 0;
    let count = 0;

    for(let i = 1; i < numbers.length; i++) {
        if(count === 0) {
            majority = numbers[i];
        }else if(numbers[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    return numbers[majority] ? numbers[majority] : null;
};

export default majorityNumber;