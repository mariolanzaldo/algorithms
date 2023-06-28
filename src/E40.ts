function getSecondLargestFromStream(stream: any): number | null {
    let max = -Infinity;
    let result = -Infinity;
  
    let nextValue = stream.next();
    
    let done = nextValue.done;
    
    while(!done) {
        const { value } = nextValue;
        done = nextValue.done;

        if(value > max) {
            [result, max] = [max, value];
        } else if (value < max && value > result) {
            result = value;
        }

        nextValue = stream.next();
    }
      
    return result === -Infinity ? null : result;
  };

// const array = [1, 2, 3, 4];
// const stream = array[Symbol.iterator]();

// console.log(getSecondLargestFromStream(stream));

export default getSecondLargestFromStream;