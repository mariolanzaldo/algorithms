import shuffle from "../E10";

test("Basic test", () =>{

    const array = [1, 2, 3, 4, 5];
    const output = shuffle(array);
    const output2 = shuffle(array);

    expect(output).not.toStrictEqual(output2);
});

test("Prove non cyclical randomness", () =>{

    const array = [1, 2, 3, 4, 5];
    const output = shuffle(array);
    const output2 = shuffle(array);
    const output3 = shuffle(array);
    const output4 = shuffle(array);
    const output5 = shuffle(array);
    const output6 = shuffle(array);
    const output7 = shuffle(array);
    const output8 = shuffle(array);
    const output9 = shuffle(array);
    const output10 = shuffle(array);

    expect(output).not.toStrictEqual(array);
    expect(output2).not.toStrictEqual(array);
    expect(output3).not.toStrictEqual(array);
    expect(output4).not.toStrictEqual(array);
    expect(output5).not.toStrictEqual(array);
    expect(output6).not.toStrictEqual(array);
    expect(output7).not.toStrictEqual(array);
    expect(output8).not.toStrictEqual(array);
    expect(output9).not.toStrictEqual(array);
    expect(output10).not.toStrictEqual(array);
});

