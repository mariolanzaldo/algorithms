function sortedSearch(matrix: number[][], target: number): number[] | null {
    if(matrix.length === 0) return null;
    
    let found;
    let i = 0;
    let row = matrix.length - 1;

    while (i < row) {
        const middle = Math.ceil((i + row) / 2);
        const num = matrix[middle][0];

        if(num === target) {
            found = [middle, 0];
            return found;
        }else if(num < target) {
            i = middle;
        } else {
            row = middle - 1;
        }
    }

    let k = 0;
    let col = matrix[i].length - 1;

    while(k <= col) {
        const middle = Math.floor((k + col) / 2);
        const num = matrix[i][middle];

        if(num === target) {
            found = [i, middle];
            return found;
        } else if (num < target) {
            k = middle + 1;
        } else {
            col = middle - 1;
        }
    }
    return null;
};

export default sortedSearch;