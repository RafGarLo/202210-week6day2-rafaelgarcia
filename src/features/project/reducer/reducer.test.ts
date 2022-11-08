import { loadActionCreator } from "./action.creators";
import { characterReducer } from "./reducer";

const mockCharacter = {
    id: 8,
    name: "Rafaelo",
    family: "Malaspulgas",
    age: 76,
    role: "fighter",
    status: false,
};

describe("Given the state and an action", () => {
    describe("When action types is loaded", () => {
        test("Then it should return payload as a new state", () => {
            const newState = characterReducer(
                [],
                loadActionCreator([mockCharacter])
            );
            expect(newState).toEqual([mockCharacter]);
        });
        describe("When the action is not loaded", () => {
            test("Then it should return a new instance of state", () => {
                const newState = characterReducer([mockCharacter], {
                    type: "",
                    payload: [],
                });
                expect(newState).toEqual([mockCharacter]);
            });
        });
    });
});
