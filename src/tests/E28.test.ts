import isRotated from "../E28";

test("Basic test", () => {
    const string1 = "waterbottle";
    const string2 = "lewaterbott";
    
    const output = isRotated(string1, string2);
    expect(output).toBeTruthy();
});

test("Should be false", () => {
    const string1 = "waterbottle";
    let string2 = "lewaterbottxx";
    
    let output = isRotated(string1, string2);
    expect(output).toBeFalsy();

    string2 = "lewaoterbott";
    output = isRotated(string1, string2);
    expect(output).toBeFalsy();

    string2 = "lewaot";
    output = isRotated(string1, string2);
    expect(output).toBeFalsy();
});