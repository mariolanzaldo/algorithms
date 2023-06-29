import findConsecutiveSeq from "../E45"


test("Should return two subsequences", () => {

    const sequence = [1, 2, 3, 4, 5];
    const target = 9;

    const output = findConsecutiveSeq(sequence, target);
    expect(output).toStrictEqual([ [ 2, 3, 4 ], [ 4, 5 ] ]);
});

test("Should return one subsequence", () => {
    const sequence = [1, 2, 3, 4, 5];
    const target = 7;

    const output = findConsecutiveSeq(sequence, target);
    expect(output).toStrictEqual([ [ 3, 4 ] ]);
});

test("Shouldn't be able to find a result", () => {
    const sequence = [2, 3, 6];
    const target = 10;

    const output = findConsecutiveSeq(sequence, target);
    
    expect(output).toBeFalsy();
})