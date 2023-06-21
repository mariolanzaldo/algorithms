import areAnagrams from "../E27";


test("Basic test", () => {

    const string1 = "dell";
    const string2 = "llde";

    const output = areAnagrams(string1, string2);
    expect(output).toBeTruthy();
});

test("Not anagrams", () => {
    const string1 = "dellxx";
    const string2 = "llde";

    const output = areAnagrams(string1, string2);
    expect(output).toBeFalsy();
})