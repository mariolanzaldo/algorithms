import mergeArrays from "../E6";

test('Basic test' , () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    mergeArrays(largeArray, smallArray);

    expect(largeArray).toStrictEqual(answer);
});

test('Higer value in the small array', () => {
    const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 9];
    const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    mergeArrays(largeArray, smallArray);

    expect(largeArray).toStrictEqual(answer);
});

test("Same array", () => {
    const smallArr = [0, 3, 5];
    const largeArr = [0, 3, 5].concat(new Array(3));

    const answer = [0, 0, 3, 3, 5, 5];
    mergeArrays(largeArr, smallArr);
    expect(largeArr).toStrictEqual(answer);
});