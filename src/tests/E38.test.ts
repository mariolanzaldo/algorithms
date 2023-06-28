import findLongestWord from "../E38";

test("Basic test", () => {
    const letters = "aa";
    
    const output = findLongestWord(letters);
    expect(output).toBe("aa");
});

test("More complexity", () => {
    const letters = "mploy";
    
    const output = findLongestWord(letters);
    expect(output).toBe("lollypop"); 
});