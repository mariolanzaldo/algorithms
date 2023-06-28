import getSecondLargest from "../E39";


test("Basic test", () => {
    const array = [20, 120, 54, 109, 88];

    const output = getSecondLargest(array);
    expect(output).toBe(109);
});

test("Should return null", () => {
    const array = [2, 2, 2, 2];

    const output = getSecondLargest(array);
    expect(output).toBeFalsy();
})