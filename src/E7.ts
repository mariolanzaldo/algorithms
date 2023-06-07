function setZeroes(matrix: number[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let zeroRows = new Set();
    let zeroCols = new Set();

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(matrix[i][j] === 0) {
                if(!zeroRows.has(i)) {
                    zeroRows.add(Number(i));
                }

                if(!zeroCols.has(j)) {
                    zeroCols.add(Number(j));
                }
            }
        }
    };

    [...zeroCols].map((element) => {
        for(let i = 0; i < rows; i++) {
            matrix[i][element as number] = 0;
        }
    });
    
    [...zeroRows].map((element) => {
        for(let i = 0; i < cols; i++) {
            matrix[element as number][i] = 0;
        }
    });
    
    return matrix;
};

export default setZeroes;