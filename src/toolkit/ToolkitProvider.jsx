import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.js";
import {Provider} from "react-redux";
import {uiSlice} from "./slices/uiSlice.js";

const toolkitStore = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        user: userSlice.reducer,
    }
})

export const ToolkitProvider = ({ children }) => {
    return <Provider store={toolkitStore}>{children}</Provider>
}