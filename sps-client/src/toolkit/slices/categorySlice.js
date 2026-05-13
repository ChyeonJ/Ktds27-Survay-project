import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categorySlice",

  initialState: {
    categoryList: [
      { id: 1, name: "로그인 관련" },
      { id: 2, name: "설문 관련" },
      { id: 3, name: "교육 관련" },
    ],
  },

  reducers: {
    addCategory: (store, action) => {
      store.categoryList.push(action.payload);
    },
  },
});

export const categoryActions = categorySlice.actions;
