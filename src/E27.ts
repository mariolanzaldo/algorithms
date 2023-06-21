function areAnagrams (string1: string, string2: string) {

    const sorted1 = [...string1].sort().join('');
    const sorted2 = [...string2].sort().join('');

    if(sorted1 === sorted2) {
        return true;
    }

    return false;
};

export default areAnagrams;