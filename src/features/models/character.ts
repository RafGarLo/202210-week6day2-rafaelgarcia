export interface ICharacter {
    id?: number;
    name: string;
    family: string;
    age: number;
    role: string;
    lifeStatus: boolean;
    kingdomYears?: number;
    customMessage?: string;
    weapon?: string;
    dexterity?: number;
    advisedPerson?: string;
    servingto?: string;
    assLickingLevel?: number;
}

export class CharacterModel {
    lifeStatus: boolean | undefined;
    constructor(
        public name: string,
        family: string,
        age: number,
        role: string
    ) {}
}
