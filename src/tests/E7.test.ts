import setZeroes from "../E7";

test("Basic test", () => {
    const matrix = [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9],
      ];

      const expAnswer = [
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9]
      ]

      const output = setZeroes(matrix);
      expect(output).toStrictEqual(expAnswer);
});

test("Complex cases", () => {
  let matrix = [
    [1, 0, 0, 2],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];

  let expAnswer = [
    [0, 0, 0, 0],
    [3, 0, 0, 2],
    [1, 0, 0, 5],
  ];

  const output1 = setZeroes(matrix);
  expect(output1).toStrictEqual(expAnswer);

  matrix = [
    [1, 0, 0, 2],
    [3, 4, 5, 2],
    [1, 0, 1, 5],
    [8, 6, 4, 0],
  ];

  expAnswer = [
    [0, 0, 0, 0],
    [3, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const output2 = setZeroes(matrix);
  expect(output2).toStrictEqual(expAnswer);


});