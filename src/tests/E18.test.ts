import SparseMatrix from "../E18";

test("Basic test", () => {

    const matrix = [
        [0, 1, 0],
        [2, 0, 0],
        [0, 5, 0]
    ];

    const optimizedM = new SparseMatrix(matrix);
    console.log(optimizedM)
    
    const element00 = optimizedM.getElement(0,0);
    expect(element00).toBe(0);

    const element01 = optimizedM.getElement(0,1);
    expect(element01).toBe(1);

    const element10 = optimizedM.getElement(1,0);
    expect(element10).toBe(2);

    const element21 = optimizedM.getElement(2,1);
    expect(element21).toBe(5);
    
    expect(() =>  optimizedM.getElement(2, 3)).toThrow(Error);
    
});