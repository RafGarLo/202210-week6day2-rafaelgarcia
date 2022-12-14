import { ICharacter } from "./character";

export const CharactersData: Array<ICharacter> = [
    {
        id: 1,
        name: "Iracundo",
        family: "Malaspulgas",
        age: 489,
        role: "king",
        lifeStatus: true,
        kingdomYears: 235,
        customMessage: "You are all going to burrrrn!",
    },
    {
        id: 2,
        name: "Irenuska",
        family: "Amazing",
        age: 489,
        role: "queen",
        lifeStatus: true,
        kingdomYears: 235,
        customMessage: "My dragon is coming for you",
    },
    {
        id: 3,
        name: "Sergio de los Truenos",
        family: "LargaEspadas",
        age: 30,
        role: "fighter",
        lifeStatus: true,
        weapon: "Sword",
        dexterity: 5,
    },
    {
        id: 4,
        name: "Mireya The Dragon Slayer",
        family: "DragonSlayers",
        age: 38,
        role: "fighter",
        lifeStatus: true,
        weapon: "Axe",
        dexterity: 8,
    },
    {
        id: 5,
        name: "Ango the WiseMan",
        family: "Traitorsnzalez",
        age: 32,
        role: "adviser",
        lifeStatus: true,
        advisedPerson: "Irenuska",
        assLickingLevel: 12,
    },
];
