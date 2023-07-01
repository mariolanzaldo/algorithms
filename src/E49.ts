const bloodTypes: {
            A: any[],
            B: any[],
            AB: any[],
            O: any[],
        } = {
            A: ["A", "O"],
            B: ["B", "O"],
            AB: ["A", "B"],
            O: ["O"],
        };

        const combinations: Object = {
            AA: "A",
            AB: "AB",
            AO: "A",
            BA: "AB",
            BB: "B",
            BO: "B",
            OA: "A",
            OB: "B",
            OO: "O",

        };

function consanguineCalculations(test: string) {
    const [parent1, parent2, child] = test.split(" ");
    
    if(child === "?") {
        let possibleChildBloodTypes: string[] | string = getPossibleBloodTypes(parent1, parent2);

        possibleChildBloodTypes = possibleChildBloodTypes.length > 0 ? possibleChildBloodTypes : "IMPOSSIBLE";

        return `${parent1} ${parent2} {${possibleChildBloodTypes}}`;
    } else if (parent2 === "?") {
        let possibleParentBlood: string[] | string = getPossibleParent(parent1, child);

        possibleParentBlood = possibleParentBlood.length > 0 ? possibleParentBlood : "IMPOSSIBLE";

        return `${parent1} {${possibleParentBlood}} ${child}`;

    }
};  


function getPossibleBloodTypes(subject1: string, subject2: string) {
    const possibleChildBloodTypes: string[] = [];
    const subject1ABO = subject1.slice(0, -1);
    const subject1Rh = subject1.slice(-1);
    const subject2ABO = subject2.slice(0, -1);
    const subject2Rh = subject2.slice(-1);

    const possibleParent1BloodTypes: any = bloodTypes[subject1ABO as keyof Object];
    const possibleParent2BloodTypes: any = bloodTypes[subject2ABO as keyof Object];

    const childABO = determineChildABO(possibleParent1BloodTypes, possibleParent2BloodTypes);
    const childRh = determineChildRh(subject1Rh, subject2Rh);

    for(const candidate of childABO) {
        for(const Rh of childRh) {  
            if(!possibleChildBloodTypes.includes(candidate + Rh)) {
                possibleChildBloodTypes.push(candidate + Rh);
            }   
        }
    }
    return possibleChildBloodTypes;
};

function getPossibleParent(parentType: string, childType: string) {
    const possibleParentBloodTypes: any[] = []

    for(const parentBlood in bloodTypes) { 
        
        const negative = getPossibleBloodTypes(parentType, parentBlood + "-");

        const positive = getPossibleBloodTypes(parentType, parentBlood + "+");
        

        if(negative.includes(childType)) {
            possibleParentBloodTypes.push(`${parentBlood}-`);
        }

        if(positive.includes(childType)) {
            possibleParentBloodTypes.push(`${parentBlood}+`);
        } 
    }
    
    return possibleParentBloodTypes;
};

function determineChildABO(blood1Types: string[], blood2Types: string[]): any {
    const possibleBloods: any = [];
    for(let i = 0; i < blood1Types.length; i++) {
        for (let j = 0; j < blood2Types.length; j++) {
            const combination = combinations[blood1Types[i] + blood2Types[j] as keyof Object];

            if(combination) {
                possibleBloods.push(combination);
            }
        }
    }
    return possibleBloods;
};

function determineChildRh(parent1Rh: string, parent2Rh: string) {
    if(parent1Rh === "-" && parent2Rh === "-") {
        return ["-"];
    } else {
        return ["+", "-"];
    }
}
export default consanguineCalculations;