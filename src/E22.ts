function fishes (fishMatrix: number[][]) {
    let survivors = 0;
    const stack: any[] = [];
    
    for(const [fish, direction] of fishMatrix) {
        if(direction === 0) {
            let survives = true;

            while(stack.length > 0 && survives) {
                const oppFish = stack.pop();
               
                if(oppFish > fish) {
                    stack.push(oppFish);
                    survives = false;
                    break;
                }
            }

            if(survives) {
                survivors ++;
            }
        } else if(direction === 1) {
            stack.push(fish);
        }
    }

    survivors += stack.length;
    return survivors;
};

export default fishes;