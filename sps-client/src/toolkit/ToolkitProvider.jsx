import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice.js";
import { Provider } from "react-redux";
import { uiSlice } from "./slices/uiSlice.js";
import { loginPageSlice } from "./slices/loginPageSlice.js";
import { categorySlice } from "./slices/categorySlice.js";
import { questionSlice } from "./slices/questionSlice.js";

const toolkitStore = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    login: loginPageSlice.reducer,
    category: categorySlice.reducer,
    question: questionSlice.reducer,
  },
});

export const ToolkitProvider = ({ children }) => {
  return <Provider store={toolkitStore}>{children}</Provider>;
};
