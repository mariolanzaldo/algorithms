const subIncludesAll = (str: string, str2: string) => {
    for (let i = 0; i < str.length; i++) {
       if (str2.includes(str[i])) {
          str2 = str2.replace(str[i], '');
       };
    };
    return (str2.length === 0);
 };
 const getSmallestSubstr = (s: string, t: string) => {
    let minSubstr = null;
    for (let i = 0; i < s.length; i++) {
       for (let j = i; j < s.length; j++) {
          let candidate = s.substring(i, j);
          if (subIncludesAll(candidate, t)) {
             if (minSubstr === null || candidate.length < minSubstr.length) {
                minSubstr = candidate;
             }
          }
       }
    }
    return minSubstr;
 };

export default getSmallestSubstr;
