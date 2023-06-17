import isBalancedExpression from "../E19";

test("Balance expression", () => {
    const string = '((A), (B))';
    const {isBalanced, missingPar} = isBalancedExpression(string);

    expect(isBalanced).toBeTruthy();
    expect(missingPar).toBe(0);
});

test("Not a balanced expression", () => {

    const string = '(A)kie))';
    const {isBalanced, missingPar} = isBalancedExpression(string);

    expect(isBalanced).toBeFalsy();
    expect(missingPar).toBe(2);
});