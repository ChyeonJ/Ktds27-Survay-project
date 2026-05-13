import { createSlice } from '@reduxjs/toolkit';

export const loginPageSlice = createSlice({
  name: 'login-slice',
  initialState: {
    isOpen: false, // 디폴트는 닫힘
    view: 'LOGIN',
    // LOGIN, FIND_ID, FIND_PW, SIGN_UP
    // NOT_FOUND_USER, FOUND_ID, FOUND_PWD
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.view = 'LOGIN';
    },
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const loginPageActions = loginPageSlice.actions;
