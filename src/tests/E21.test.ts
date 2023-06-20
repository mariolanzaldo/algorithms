import cars from '../E21';

test("Basic test", () => {
    const arr = [0,1,0,0,1,1,0];
    const output = cars(arr);
    
    expect(output).toBe(7);
});

test("Never crosses", () => {
    let arr = [0, 0, 0];
    let output = cars(arr);

    expect(output).toBe(0);

    arr = [1, 1, 1];
    output = cars(arr);

    expect(output).toBe(0);
});