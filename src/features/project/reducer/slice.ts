import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../models/character";

const initialState: Array<ICharacter> = [];

export const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ICharacter>) => {
            //     state.push(action.payload)
            // return state ---esto es una opcion valida, convertida en inmmutable por libreria immer.js.
            return [...state, action.payload];
        },

        delete: (state, action: PayloadAction<ICharacter["id"]>) =>
            state.filter((item) => item.id !== action.payload),

        update: (state, action: PayloadAction<ICharacter>) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            ),

        load: (_state, action: PayloadAction<Array<ICharacter>>) =>
            action.payload,
    },
});

export const { reducer: characterReducer } = characterSlice;
