function isRotated(string1: string, string2: string): Boolean {
    const isSameLength = string1.length === string2.length;

    const isIncluded = string2.repeat(2).includes(string1);

    return isSameLength && isIncluded;
};

export default isRotated;