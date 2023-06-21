function isPermutation(string1: string, string2: string): Boolean {

    if(string1.length !== string2.length) {
        return false;
    }

    const charMap = mapChar(string1);

    for(const char of string2) {
        if(charMap[char] && charMap[char] >= 1) {
            charMap[char]--;
        } else if(!charMap[char] || charMap[char] === 0){
            return false;
        }
    }
    return true;
};

function mapChar(string: string) {
    let map: any = {};

    for(const char of string) {
        if(!map[char]) {
            map[char] = 1;
        } else if (map[char]){
            map[char]++;
        }
    }

    return map;
}

export default isPermutation;