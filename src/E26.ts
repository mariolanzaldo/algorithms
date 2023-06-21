function levensteinDistance(string1: string, string2: string): number {
    const strLength1 = string1.length;
    const strLength2 = string2.length;

    const matrix = Array(strLength1).fill(0).map(() => Array(strLength2).fill(0))
  
    for (let i = 0; i < strLength1; i++){
        matrix[i][0] = i
    } 
  
    for (let j = 0; j < strLength2; j++){
        matrix[0][j] = j
    } 
  
    for (let j = 0; j < strLength2; j++){
        for (let i = 0; i < strLength1; i++){
            matrix[i][j] = Math.min(
              (i == 0 ? 0 : matrix[i - 1][j]) + 1,
              (j == 0 ? 0 : matrix[i][j - 1]) + 1,
              (i == 0 || j == 0 ? 0 : matrix[i - 1][j - 1]) + (string1[i] == string2[j] ? 0 : 1)
            )
        }
    }
  
    return matrix[strLength1 - 1][strLength2 - 1]
  }
export default levensteinDistance;