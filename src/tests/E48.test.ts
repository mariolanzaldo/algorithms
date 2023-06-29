import getSmallestSubstr from "../E48";


test("Basic test", () => {
    const s = "this is a test string";
    const t = "tist"
    
    const output = getSmallestSubstr(s, t);
    expect(output).toBe("t stri");
});

test("Should not find anything", () => {
    const s = "";
    const t = "abc"
    
    const output = getSmallestSubstr(s, t);
    expect(output).toBeFalsy();
});

test("Another test", () => {
    const s = "abcdefgh";
    const t = "gedcf";

    const output = getSmallestSubstr(s, t);
    expect(output).toEqual("cdefg");
})