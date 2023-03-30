import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./Slicers/ShowSlicer";
const store = configureStore({
  reducer: {
    display: showReducer,
  },
});
export default store;
