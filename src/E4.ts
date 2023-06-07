const dir = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
];

function dfs(matrix: number[][], i: any, j: any) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    if(!isGroup(matrix, i, j, rows, cols)) {
        return;
    }

    matrix[i][j] = 0;

    for(const [x, y] of dir) {
        dfs(matrix, i + x, j + y);
    }
};

function isGroup(matrix: number[][], i: any, j: any, rows: any, cols: any) {
    return(
        i >= 0 && 
        i < rows &&
        j >= 0 &&
        j < cols &&
        matrix[i][j] === 1
    )
};

function countGroups (matrix: number[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let numOfGroups = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(isGroup(matrix, i, j, rows, cols)) {
                dfs(matrix, i, j);

                numOfGroups++;
            }
        }
    }
    return numOfGroups;
};

export default countGroups;