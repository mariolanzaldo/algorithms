interface SparseMatrix {
    data: any;
    rows: number;
    cols: number;
}

class SparseMatrix implements SparseMatrix {
    constructor(matrix: number[][]) {
        this.rows = matrix.length;
        this.cols = matrix[0].length;
        this.data = [] as any;


        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++) {
                if(matrix[i][j] !== 0) {
                    this.data[i] = { ...this.data[i]};
                    this.data[i][j] = matrix[i][j];
                } else {
                    continue;
                }
            }
        }
    }

    getElement(row: number, col: number) {

        if(row >= this.rows || col >= this.cols) throw new Error('Invalid input');  
        
        if (!this.data[row][col] || !this.data[row]) return 0; 
    
        return this.data[row][col];
      }
};
export default SparseMatrix;