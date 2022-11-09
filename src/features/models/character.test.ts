import { CharacterModel } from "./character";

describe("Given the character model", () => {
    describe("When we instantiate it", () => {
        const character = new CharacterModel("", "", 25, "");
        test("We should have an object of the class", () => {
            expect(character).toBeInstanceOf(CharacterModel);
        });
    });
});
