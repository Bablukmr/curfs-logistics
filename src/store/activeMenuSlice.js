import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idValue: 1, // Initial ID
};

const activeMenu = createSlice({
  name: "idValue",
  initialState,
  reducers: {
    changeActiveMenu: (state, action) => {
      state.idValue = action.payload;
    },
  },
});

export const { changeActiveMenu } = activeMenu.actions;
export default activeMenu.reducer;
