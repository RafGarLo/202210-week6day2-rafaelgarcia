import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../../models/task";
import * as ac from './action.creators'
import { actionTypes } from "./action.types";
const initialState : Array<Task> = []
export const taskReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload)
    builder.addCase(ac.addActionCreator, (state, action) => [...state, action.payload])
    builder.addCase(ac.updateActionCreator, (state, action) => state.map((item) => item.id === actionTypes.payload.id ? action.payload: payload : item))
    builder.addCase(ac.deleteActionCreator, (state, action) => state.filter((item) =>item.id !==action.payload.id ))
    builder.addDefaultCase((state) => state)
})
