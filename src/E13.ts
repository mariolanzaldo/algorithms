export function recursiveFlatten(array: any[]): any[] {
    let flattenArray: any[] = [];

    for(const element of array) {
        if(!Array.isArray(element)) {
            flattenArray.push(element);
        } else if(Array.isArray(element)) {
            flattenArray = [...flattenArray, ...recursiveFlatten(element)];
        }
    }
    return flattenArray;
};

export function iterativeFlatten(array: any[]) {
    const stack = [...array];
    const flattenArray: any[] = [];

    while(stack.length) {
        const next = stack.shift();

        if(!Array.isArray(next)) {
            flattenArray.push(next);
        } else {
            stack.unshift(...next);
        }
    }

    return flattenArray;
}