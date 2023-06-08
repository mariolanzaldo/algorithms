function shuffle(array: number[]): number[] {
    const output = [...array].map((_, i, arrayCopy) => {
        let rand = i + (Math.floor(Math.random() * (arrayCopy.length - i)));
        [arrayCopy[rand], arrayCopy[i]] = [arrayCopy[i], arrayCopy[rand]];

        return arrayCopy[i];
    });

    return output;
}

export default shuffle;