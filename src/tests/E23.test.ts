import baseConverter from "../E23";


test("Decimal to hexadecimal", () => {
    const output = baseConverter(300, 16);
    
    expect(output).toBe("12C");
});

test("Decimal to binary", () => {
    const output = baseConverter(25, 2);
    expect(output).toBe('11001');
});

test("Should return 0", () => {
    const output = baseConverter(0, 2);
    expect(output).toBe('0');
});

test("Should return the same", () => {
    const output = baseConverter(22, 10);
    expect(output).toBe('22');
});