function LCS(str1: string, str2: string) {
    if (str1.length === 0 || str2.length === 0) {
        return '';
    }

    const lcs = [];
    const rowSize = str1.length + 1;
    const colSize = str2.length + 1;
    for (let i = 0; i < rowSize; i++) {
        const row: any = [];
        lcs.push(row);
        for (let j = 0; j < colSize; j++) {
            row.push({ value: 0, direction: 'sink' });
        }
    }
    
    for (let i = 1; i < rowSize; i++) {
        for (let j = 1; j < colSize; j++) {
            const cell = lcs[i][j];
            if (str1[i - 1] === str2[j - 1]) {
                cell.value = lcs[i - 1][j - 1].value + 1;
                cell.direction = 'up-left';
            } else if (lcs[i][j - 1].value === lcs[i - 1][j].value) {
                cell.direction = 'both';
                cell.value = lcs[i][j - 1].value;
            } else if (lcs[i][j - 1].value > lcs[i - 1][j].value) {
                cell.direction = 'left';
                cell.value = lcs[i][j - 1].value;
            } else {
                cell.direction = 'up';
                cell.value = lcs[i - 1][j].value;
            }
        }
    }
    
    let i = str1.length;
    let j = str2.length;
    let node = lcs[i][j];
    let result = '';

    for(let val = node.value; val > 0;) {
        if (node.direction === 'up' || node.direction === 'both') {
             i -= 1;
        } else if (node.direction == 'left') {
            j -= 1;
        } else {
            i -= 1;
            j -= 1;
            result = str1[i] + result;
        }
            node = lcs[i][j];
            val = node.value;
    }
    
    return result;
}

export default LCS;