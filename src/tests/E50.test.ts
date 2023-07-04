import isInterleaved from "../E50";

test("Basic test", () => {
    const str1 = "abcd";
    const str2 = "abcd";
    const str3 = "aabcbcdd";

    const output = isInterleaved(str1, str2, str3);
    expect(output).toBeTruthy();
});

test("Should return false", () => {
    const str1 = "aabcc";
    const str2 = "dbbca";
    const str3 = "aadbbbaccc";

    const output = isInterleaved(str1, str2, str3);
    expect(output).toBeFalsy();
})