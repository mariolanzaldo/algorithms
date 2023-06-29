import missingNumber from "../E42";

test("Basic test", () => {
    const array = [1, 2, 5, 4, 3, 7, 8, 10, 6];
    const output = missingNumber(array);

    expect(output).toBe(9);
});

