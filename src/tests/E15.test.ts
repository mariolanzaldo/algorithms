import sortedSearch from "../E15";

test("Basic test", () => {

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const output = sortedSearch(matrix, 8);
    expect(output).toStrictEqual([2, 1]);

    const output2 = sortedSearch(matrix, 4);
    expect(output2).toStrictEqual([1, 0]);
    
    const output3 = sortedSearch(matrix, 3);
    expect(output3).toStrictEqual([0, 2]);
});

test("Should return null if the matrix does not contain the element", () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const output = sortedSearch(matrix, 0);
    expect(output).toBeFalsy();
});

test("nxm matrix", () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
    ];

    const output = sortedSearch(matrix, 0);
    expect(output).toBeFalsy();

    const output2 = sortedSearch(matrix, 6);
    expect(output2).toStrictEqual([1, 2]);
});