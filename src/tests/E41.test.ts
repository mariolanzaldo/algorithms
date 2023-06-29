import kthLargest from "../E41";

test("Basic test", () => {
    const array = [12, 3, 5, 7, 10];
    const k = 2;

    const output = kthLargest(array, k);
    expect(output).toStrictEqual([10, 12]);
});

test("If k exceeds the total elements", () => {
    const array = [12];
    const k = 2;

    const output = kthLargest(array, k);
    expect(output).toBeFalsy();
});