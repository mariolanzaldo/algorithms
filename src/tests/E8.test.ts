import arraySum from '../E8';

test("Basic test", () => {
    const arr1 = [9, 9];
    const arr2 = [1];

    const output = arraySum(arr1, arr2);
    expect(output).toStrictEqual([1, 0, 0]);
});

describe("Other cases", () => {
    test("Equal length", () => {
        const arr1 = [1, 2, 3];
        const arr2 = [8, 9, 7];
    
        const output = arraySum(arr1, arr2);
        expect(output).toStrictEqual([1, 0, 2, 0]);
    });
    
    test("Arr2 is bigger", () => {
        const arr1 = [2, 9, 9];
        const arr2 = [1, 8, 3, 4];

        const output = arraySum(arr1, arr2);
        expect(output).toStrictEqual([2, 1, 3, 3]);
    });
});