import { ICharacter } from "../../models/character";
import {
    loadActionCreator,
    addActionCreator,
    deleteActionCreator,
    updateActionCreator,
} from "./action.creators";
import { actionTypes } from "./action.types";
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
        describe("When the action is to add", () => {
            test("Then it should add item", () => {
                const newState: ICharacter[] = [];
                const action = {
                    type: actionTypes.add,
                    payload: mockCharacter,
                };
                const result = characterReducer(newState, action);
                expect(result).toEqual([mockCharacter]);
            });
        });
        // describe("When the action is to delete", () => {
        //     test("Then it should delete item", () => {
        //         const state: ICharacter = mockCharacter;
        //         const action = {
        //             type: actionTypes.delete,
        //             payload: mockCharacter,
        //         };
        //         const result = characterReducer(state, action);
        //         expect(result).toEqual(mockCharacter);
        //     });
        // });
        // test("Then it should update the item", () => {
        //     const state: ICharacter = mockCharacter;
        //     const action = {
        //         type: actionTypes.update,
        //         payload: mockCharacter,
        //     };
        //     const result = characterReducer(state, action);
        //     expect(result).toEqual(mockCharacter);
        // });
    });
});
