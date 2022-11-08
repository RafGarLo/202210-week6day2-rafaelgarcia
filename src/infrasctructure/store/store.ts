import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "../../features/project/reducer/reducer";
export const appStore = configureStore({
    reducer: {
        characters: characterReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
