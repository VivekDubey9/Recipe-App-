import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice.js";

const store = configureStore({
  reducer: {
    favs: favSlice, //this should be the name of the slice and the name of your returned object from favSlice
  },
});

export default store;
