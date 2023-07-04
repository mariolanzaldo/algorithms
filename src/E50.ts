function isInterleaved(str1: string, str2: string, str3: string) {
    const m = str1.length;
    const n = str2.length;
    let matrix = new Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    if(m + n !== str3.length) {
        return false;
    }

    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if(i === 0 && j === 0) {
                matrix[i][j] = true;
            } else if(i !== 0 && j !== 0 && str1.charAt(i - 1) === str3.charAt(i + j) && str2.charAt(j - 1) === str3.charAt(i + j - 1)) {
                matrix[i][j] = matrix[i - 1][j] || matrix[i][j - 1];
            } else if(i !== 0 && str1.charAt(i - 1) === str3.charAt(i + j - 1)) {
                matrix[i][j] = matrix[i - 1][j];
            } else if(j !== 0 && str2.charAt(j - 1) === str3.charAt(i + j -1)) {
                matrix[i][j] = matrix[i][j - 1];
            }
        }
    }

    return matrix[m][n];
};

export default isInterleaved;