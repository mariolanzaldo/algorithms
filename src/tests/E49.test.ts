import consanguineCalculations from "../E49"


test("Child test", () => {
    const output = consanguineCalculations("O+ O- ?");
    expect(output).toBe("O+ O- {O+,O-}")
    
});

test("Parent test", () => {

    const output = consanguineCalculations("O+ ? O-");
    console.log(output);
    expect(output).toBe("O+ {A-,A+,B-,B+,O-,O+} O-");
})

test("Should return impossible", () => {
    const output = consanguineCalculations("AB+ ? O-");
    expect(output).toBe("AB+ {IMPOSSIBLE} O-");
})