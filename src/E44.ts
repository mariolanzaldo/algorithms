function getAlphabeticalIndex(char: string): number {
    return char.charCodeAt(0) - 97;
}

function lowerLex(str: string): string | null{
    const lowerCaseStr = str.toLowerCase();
    const alphabetCounter =  new Array(26).fill(0);
    const resultArr = [];

    for(let i = 0; i < lowerCaseStr.length; i++) {
        const index = getAlphabeticalIndex(lowerCaseStr[i]);
        alphabetCounter[index]++;
    }

    for(let i = 0; i< alphabetCounter.length; i++) {
        if(alphabetCounter[i] !== 0) {
            resultArr.push(String.fromCharCode(i + 97));
        }
    }

    const result = resultArr.join('');

    return result ? result : null;
};

export default lowerLex;