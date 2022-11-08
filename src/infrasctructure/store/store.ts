import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../../features/project/reducer/reducer";
export const appStore = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
