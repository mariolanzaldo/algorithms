import majorityNumber from "../E47";


test("There is a majority", () => {
    const array = [1, 2, 2, 3, 3, 3];

    const output = majorityNumber(array);
    expect(output).toBe(3);
});

test('Should return null if there is no majority', () => {
    const array = [1, 2, 3, 4];

    const output = majorityNumber(array);
    expect(output).toBeFalsy();
})