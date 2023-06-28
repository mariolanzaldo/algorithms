// @ts-ignore
import  words from "an-array-of-english-words";

function checkAlphabetIndex(str: string){
    str = str.toLowerCase();

    return str.split("").map((char) => char.charCodeAt(0) - 97);
}

function possibleWordsFromDict(chars: any, words: string[]){
    const charsMap =checkAlphabetIndex(chars);
    
    let filteredWords = words.map((word) => {
        let wordMap = checkAlphabetIndex(word);
        for(let i = 0; i < wordMap.length; i++) {
            if(!charsMap.includes(wordMap[i])){
                return;
            }
        }
        return word;
    });

    filteredWords = filteredWords.filter((el) => !!el );
    return filteredWords;
};

function findLongestWord(chars: string){
    const possibleWords = possibleWordsFromDict(chars, words);

    let longestWord, longestLength = 0;

    for(let i = 0; i < possibleWords.length; i++) {
        const word = possibleWords[i];

        if( word && word.length > longestLength) {
            longestLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
};

export default findLongestWord;