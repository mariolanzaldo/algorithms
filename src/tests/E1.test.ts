import maxNumber from '../E1';


test("Basic test", () => {
    const arr = [1, -3, 9, 2, 5];
    const output = maxNumber(arr);

    expect(output).toBe(9);
});
