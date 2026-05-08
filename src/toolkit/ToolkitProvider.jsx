import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.js";
import {Provider} from "react-redux";

const toolkitStore = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})

export const ToolkitProvider = ({ children }) => {
    return <Provider store={toolkitStore}>{children}</Provider>
}