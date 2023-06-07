import getLargestRect from "../E3";

test("Simple cases", () => {
    let matrix: number[][] = [];

    let maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(0);

    matrix = [[0]];
    maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(0);

    matrix = [[1]];
    maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(1);

    matrix = [
        [1, 0],
        [0, 1]
    ];
    maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(1);

    matrix = [
        [1, 1],
        [1, 1]
    ];
    maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(4);

    matrix = [
        [0, 1],
        [1, 1]
    ];
    maxArea = getLargestRect(matrix);
    expect(maxArea).toBe(2);
});

test("Complex case", () => {
    const matrix = [
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ];

    const maxArea = getLargestRect(matrix);

    expect(maxArea).toBe(22);
})