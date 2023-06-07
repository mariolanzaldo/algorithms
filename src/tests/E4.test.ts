import countGroups from '../E4';

test("Simple cases", () => {
    let matrix = [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
    ];
    
    const output1 = countGroups(matrix);
    expect(output1).toEqual(1);

    matrix = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ];

    const output2 = countGroups(matrix);
    expect(output2).toEqual(2);

    matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];

    const output3 = countGroups(matrix);
    expect(output3).toEqual(3);
});

test("Complex cases", () => {
    let matrix = [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
    ];

    const output1 = countGroups(matrix);
    expect(output1).toEqual(3);

    matrix = [
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1],
    ];

    const output2 = countGroups(matrix);
    expect(output2).toEqual(2);
    
  });