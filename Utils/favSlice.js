import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  //this createSlice will give us object which contains {actions,and reducer notice here naming is crucial}
  name: "favs",
  initialState: {
    items: [],
  },
  reducers: {
    addtofavs: (state, action) => {
      state.items.push(action.payload);
    },
    removefavs: (state, action) => {
      state.items.pop();
    },
    clearfavs: (state, action) => {
      state.items = [];
    },
  },
});

//now create slice function returns an object with actions and reducer not reducers...

//actions will contains our function so directly named export using destructuring...

export const { addtofavs, removefavs, clearfavs } = favSlice.actions;

export default favSlice.reducer;
