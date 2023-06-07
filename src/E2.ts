function printNumbers(start: number, end: number) {
    const output: number[] = Array.from({length:end}, (_,i) => i + start);
    return output;
};

export default printNumbers;