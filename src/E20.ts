interface Obj {
    isBalanced: boolean;
}

function isBalancedExpression(string: string): Obj {
    const stack: string[] = [];
    let output;
    let counter = 0;

    for (const char of string) {
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if(char === ")") {
            const item = popFromStack(stack);

            if(item === "{" || item === "[") {
                counter++;
            } 
        } else if(char === "}") {
            const item = popFromStack(stack);

            if(item === "(" || item === "[") {
                counter++;
            } 
        }else if(char === "]") {
            const item = popFromStack(stack);

            if(item === "(" || item === "{") {
                counter++;
            } 
        }
    }

    (stack.length === 0 && counter === 0) ? output = { isBalanced: true} : output = { isBalanced: false}

    return output;
};

function popFromStack(stack: string[]) {
    return stack.pop();

};

export default isBalancedExpression;