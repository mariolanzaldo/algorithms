function findConsecutiveSeq(numbers: number[], target: number): number[] | null{
    let endIndex = 0;
    let sum = numbers[0];
    let startIndex = 0;
    let result: any = [];

    while(endIndex < numbers.length) {
        switch(true) {
            case sum === target: 
            const subsequence = numbers.slice(startIndex, endIndex + 1);
            
            result.push(subsequence);
            sum -= numbers[startIndex];
            startIndex++;
            break;

            case sum < target: 
            endIndex++;
            sum += numbers[endIndex];
            break;

            case sum > target:
                sum -= numbers[startIndex];
                startIndex++;
            break;
        }
    }
    
    return result.length > 0 ? result : null;
};

export default findConsecutiveSeq;