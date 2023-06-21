import hotPotato from "../E24";


test("Basic test", () => {
    const participants = ['Jack', 'Carl', 'Ingrid', 'Chris'];
    const n = 10;
    const { eliminated, winner} = hotPotato(participants, n);
    console.log(winner);
    console.log(eliminated);

    expect(winner).toBeTruthy();
});