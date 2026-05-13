import {createSlice} from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        asideToggle: false,
        menu: [
            {id: "01", name: "menu", parentId: ""},

            // {id: "0101", name: "menu 1", parentId: "01"},
            {id: "0102", name: "menu 2", parentId: "01"},
            {id: "0103", name: "menu 3", parentId: "01"},

            // {id: "010101", name: "submenu 11", parentId: "0101"},
            // {id: "010102", name: "submenu 12", parentId: "0101"},

            {id: "010201", name: "submenu 21", parentId: "0102"},
            {id: "010202", name: "submenu 22", parentId: "0102"},
            {id: "010203", name: "submenu 23", parentId: "0102"},

            {id: "010301", name: "submenu 31", parentId: "0103"},
        ]
    },
    reducers: {
        changeAsideToggle(state) {
            state.asideToggle = !state.asideToggle;
        }
    }
})

export const uiActions = uiSlice.actions;