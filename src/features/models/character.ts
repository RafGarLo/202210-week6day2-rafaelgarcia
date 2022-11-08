export interface ICharacter {
    id?: number;
    name: string;
    family: string;
    age: number;
    role: string;
    status: boolean;
    kingdomYears?: number;
    customMessage?: string;
    weapon?: string;
    dexterity?: number;
    advisedPerson?: string;
    servingto?: string;
    assLickingLevel?: number;
}
