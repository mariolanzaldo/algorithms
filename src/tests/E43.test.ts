import LCS from "../E43";

test("Basic test", () => {
    const str1 = "ABCDGH";
    const str2 = "AEDFHR";

    const output = LCS(str1, str2);
    expect(output).toBe("ADH");
});

test("Nothing in common", () => {
    const str1 = "ABC";
    const str2 = "DEF";

    const output = LCS(str1, str2);
    expect(output).toBe("");
});