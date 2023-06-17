import isBalancedExpression from "../E20";

test("Balance expression", () => {
    const string = '({A}, [B])';
    const {isBalanced} = isBalancedExpression(string);

    expect(isBalanced).toBeTruthy();
});

test("Not a balanced expression", () => {

    const string = '({A}, B])';
    const {isBalanced} = isBalancedExpression(string);

    expect(isBalanced).toBeFalsy();
});

test("Two different unbalanced characters", () => {
    const string = '([{)';
    const {isBalanced} = isBalancedExpression(string);

    expect(isBalanced).toBeFalsy();
});

test("All kinds are unbalanced characters", () => {
    const string = '([{';
    const {isBalanced} = isBalancedExpression(string);

    expect(isBalanced).toBeFalsy();
});