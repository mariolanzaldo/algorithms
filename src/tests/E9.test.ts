import swapArr from "../E9";

test("Basic tests", () => {
    let array = [3, 2, 0, 1];
    let output = swapArr(array);
    expect(output).toStrictEqual([1, 0, 3, 2]);

    array = [2, 4, 3, 1, 0];
    output = swapArr(array);
    expect(output).toStrictEqual([3, 0, 1, 4, 2]);

    array = [0, 1, 2, 3];
    output = swapArr(array);
    expect(output).toStrictEqual([0, 1, 2, 3]);
});