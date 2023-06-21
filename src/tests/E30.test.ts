import reverseOddWords from "../E30";

test("Basic test", () => {

    const string = "terra mystica is a great boardgame";

    const output = reverseOddWords(string);
    expect(output).toBe("terra acitsym is a great emagdraob");
});

test("An empty string should return an empty string", () => {
    const string = "";

    const output = reverseOddWords(string);
    expect(output).toBe("");
});

test("Single word cannot be affected", () => {
    const string = "the";

    const output = reverseOddWords(string);
    expect(output).toBe("the");
});