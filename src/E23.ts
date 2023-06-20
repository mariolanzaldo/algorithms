function baseConverter(n: number, base: number): string {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stack: any[] = [];

    if(n === 0) {
        return '0';
    }

    while (n > 0) {
        const remainder = n % base;
        stack.push(remainder);

        n  = Math.floor(n / base);
    };

    const newDigits = [];

    while(stack.length > 0) {
        newDigits.push(digits[stack.pop()]);
    }

    const output = newDigits.join('');
    return output;
};

export default baseConverter;