import levensteinDistance from "../E26";


test("Basic test", () => {
    const string1 = "duck";
    const string2 = "dark";

    const output = levensteinDistance(string1, string2);
    expect(output).toBe(2);
});