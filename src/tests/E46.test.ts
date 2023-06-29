import longestRun from "../E46";

test('Big input test (bigger at the end of string)', () => {
    const input = "1212223311212223";
    const output = longestRun(input);
    expect(output).toEqual("1121222");
});

test('Big input test (bigger at the beginning of string)', () => {
    const input = "12111112223311212223";
    const output = longestRun(input);
    expect(output).toEqual("1211111222");
});

test('Small input test', () => {
    const input = "11123";
    const output = longestRun(input);
    expect(output).toEqual("1112");
});