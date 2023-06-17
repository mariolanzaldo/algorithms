interface Obj {
    isBalanced: boolean;
    missingPar: number;
}

function isBalancedExpression(string: string): Obj {
    const stack: string[] = [];
    let counter = 0;

    for (const char of string) {
        if(char === "(") {
            stack.push(char);
        } else if(char === ")") {
            const item = stack.pop();

            if(!item) {
                counter++;
            } 
        }
    }

    if(stack.length === 0 && counter === 0) {
        return { isBalanced: true, missingPar: counter};
    } else {
        return { isBalanced: false, missingPar: counter};
    }
};

export default isBalancedExpression;