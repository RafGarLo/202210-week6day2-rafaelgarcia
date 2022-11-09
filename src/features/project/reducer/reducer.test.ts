import { ICharacter } from "../../models/character";
import { actionTypes } from "./action.types";
import { characterReducer } from "./reducer";

const mockCharacter: ICharacter = {
    id: 8,
    name: "Rafaelo",
    family: "Malaspulgas",
    age: 76,
    role: "fighter",
    status: false,
};

let action: { type: string; payload: any };
let state: Array<ICharacter>;

describe("Given the state and an action", () => {
    describe("When action types is loaded", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [mockCharacter],
            };
            state = [];
        });
        test("Then it should return payload action", () => {
            const result = characterReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action is to add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: mockCharacter,
            };
            state = [];
        });
        test("Then it should add item", () => {
            const result = characterReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is to delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: mockCharacter,
            };
            state = [mockCharacter];
        });
        test("Then it should delete item", () => {
            const result = characterReducer(state, action);
            expect(result).toEqual([]);
        });
    });
    describe("when the action is update", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockCharacter, title: "update character" },
            };
            state = [mockCharacter];
        });
        test("Then it should update the item", () => {
            const result = characterReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
});
