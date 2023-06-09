import { recursiveFlatten, iterativeFlatten } from "../E13";

describe("Recursive flatten tests", () => {
    test("Basic tests", () => {
        const array = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

        const flatten = recursiveFlatten(array);
        expect(flatten).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("Already flat array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const flatten = recursiveFlatten(array);

        expect(flatten).toEqual(array);
    });
});

describe("Iterative method", () => {
    test("Basic tests", () => {
        const array = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

        const flatten = iterativeFlatten(array);
        expect(flatten).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("Already flat array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const flatten = iterativeFlatten(array);

        expect(flatten).toEqual(array);
    });
});