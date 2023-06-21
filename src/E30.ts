function reverseOddWords(string: string): string {

    const stringArray = string.split(' ');
     const output = stringArray.map((word, index) => {
        if(index % 2 === 0) {
            return word;
        } else {
            return word.split("").reverse().join("");
        }
     }).join(" ");

    return output;
};

export default reverseOddWords;