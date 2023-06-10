function optimizeSpace(array: number[], output: any[] = [], size: number = 1): any {
    if(array.length === 0) return output;

    const currentItem = array.slice(0, size);
    const remainder = array.slice(size);
    output.push(currentItem);

    return optimizeSpace(remainder, output, size + 1);
};

export default optimizeSpace;