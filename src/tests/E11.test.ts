import reverseBlocks from "../E11";

test("Basic test", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const blockSize = 2;

    const output = reverseBlocks(array, blockSize);
    expect(output).toStrictEqual([2, 1, 4, 3, 6, 5])
});

test("Block size is not equal through all the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const blockSize = 3;

    const output = reverseBlocks(array, blockSize);
    expect(output).toStrictEqual([3, 2, 1, 6, 5, 4, 7]);
});
