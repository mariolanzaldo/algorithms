import findRoutes from "../E14";

test("2 x 2 test", () => {
    const matrix = [
        [1, 2],
        [3, 4],
    ];

    const paths = findRoutes(matrix);

    const expectedAns = [
        [1, 2, 4],
        [1, 3, 4]
    ];

    expect(paths).toStrictEqual(expectedAns);
});

test("3 x 3 test", () => {
    const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const paths = findRoutes(matrix);

        const expectedAns = [
            [ 1, 2, 3, 6, 9 ],
            [ 1, 2, 5, 6, 9 ],
            [ 1, 2, 5, 8, 9 ],
            [ 1, 4, 5, 6, 9 ],
            [ 1, 4, 5, 8, 9 ],
            [ 1, 4, 7, 8, 9 ]
        ];
    
    expect(paths).toStrictEqual(expectedAns); 
});

test("m x n case", () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8]
    ];

    const paths = findRoutes(matrix);

    const expectedAns = [
            [ 1, 2, 3, 4, 8 ],
            [ 1, 2, 3, 7, 8 ],
            [ 1, 2, 6, 7, 8 ],
            [ 1, 5, 6, 7, 8 ],
        ];
    
    expect(paths).toStrictEqual(expectedAns); 
});