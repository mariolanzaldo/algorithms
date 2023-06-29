import lowerLex from "../E44"


test("Basic test", () => {
    const str = "yzxyz";

    const output = lowerLex(str);
    expect(output).toBe("xyz");
});

test("Inputs with repeated characters", () => {
    let str = "abcabc";

    let output = lowerLex(str);
    expect(output).toBe("abc");

    str = "aabbcc";
    output = lowerLex(str);
    expect(output).toBe("abc");
})