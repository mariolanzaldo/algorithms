import fishes from "../E22"

test("Basic test", () => {
    // const sizes = [2, 6, 1, 7, 5, 4, 3];
    // const directions = [1, 0, 0, 1, 1, 0, 1];

    const matrix = [
        [2, 0],
        [6, 1],
        [1, 1],
        [7, 0],
        [5, 0],
        [4, 1],
        [3, 0]
    ];
    
    const output = fishes(matrix);
    expect(output).toBe(4);
})