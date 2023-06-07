function maxAreaHistogram (histogram: number[]) {
    let stack: number[] = [];
    let maxArea = 0;
    let index = 0;

    while(index < histogram.length) {
        if(stack.length === 0 || histogram[stack[stack.length - 1]] <= histogram[index]) {
            stack.push(index);
            index += 1;
        } else {
            let topStack: any = stack.pop();

            let area = (histogram[topStack] *
                (stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index));

            maxArea = Math.max(maxArea, area);
        }
    }

    while(stack.length > 0) {
        let topStack: any = stack.pop();

        let area = (histogram[topStack] * 
            (stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index));

            maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};

function getLargestRect (matrix: number[][]): number {
    const matrixSize = matrix.length;
    let maxArea = 0;

    if(matrixSize === 0) {
        return maxArea;
    }

    let histogram: number[] = [...matrix[0]].map(() => 0);

    for(const row of matrix) {
        row.forEach((element, index) => {
            if(element === 0) {
                histogram[index] = 0;
            } else {
                histogram[index] += element;
            }
        });
        maxArea = Math.max(maxArea, maxAreaHistogram(histogram));
    }

    return maxArea;
};

export default getLargestRect;