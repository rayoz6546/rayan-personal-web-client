import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Home/coursesReducer";

const store = configureStore({

  reducer: {

    coursesReducer,
  },
});
export default store;