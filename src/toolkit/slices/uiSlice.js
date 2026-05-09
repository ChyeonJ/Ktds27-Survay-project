import {createSlice} from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        asideToggle: false,
    },
    reducers: {
        changeAsideToggle(state) {
            state.asideToggle = !state.asideToggle;
        }
    }
})

export const uiActions = uiSlice.actions;