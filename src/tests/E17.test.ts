import optimizeSpace from "../E17";

test("Basic test", () => {
    const expected = [[1],[2, 3],[4 ,5 , 6],[7, 8, 9, 10]];
    const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    const output = optimizeSpace(array);
    expect(output).toStrictEqual(expected);
});