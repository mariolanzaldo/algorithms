import translateLetters from "../E66";


test("Sample input 1", () => {

    const translations = [
        { letter1: 'c', letter2: 't' },
        { letter1: 'i', letter2: 'r' },
        { letter1: 'k', letter2: 'p' },
        { letter1: 'o', letter2: 'c' },
        { letter1: 'r', letter2: 'o' },
        { letter1: 't', letter2: 'e' },
        { letter1: 't', letter2: 'f' },
        { letter1: 'u', letter2: 'h' },
        { letter1: 'w', letter2: 'p' },
      ];
      const wordPairs = [
        ['we', 'we'],
        ['can', 'the'],
        ['work', 'people'],
        ['it', 'of'],
        ['out', 'the'],
      ];
      
      const output = translateLetters(translations, wordPairs);
      expect(output).toEqual(["yes", "no", "no", "yes", "yes"]);
});

test("Sample input 2", () => {
    const translations = [
        { letter1: '3', letter2: '3' },
        { letter1: 'a', letter2: 'c' },
        { letter1: 'b', letter2: 'a' },
        { letter1: 'a', letter2: 'b' },
      ];

      const wordPairs = [
        ['aaa', 'abc'],
        ['abc', 'aaa'],
        ['acm', 'bcm'],
      ];

      const output = translateLetters(translations, wordPairs);
      expect(output).toEqual(["yes", "no", "yes"]);
});