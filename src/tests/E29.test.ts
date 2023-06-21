import isPermutation from "../E29";


test("Basic test", () => {

    const string1 = "waterbottle";
    const string2 = "lewaterbott";
    
    const output = isPermutation(string1, string2);
    expect(output).toBeTruthy();
});

test("Should return false", () => {
    const string1 = "doog";
    let string2 = "gooD";
    
    let output = isPermutation(string1, string2);
    expect(output).toBeFalsy();

    string2 = "good ";
    
    output = isPermutation(string1, string2);
    expect(output).toBeFalsy();
});