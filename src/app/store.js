import { configureStore } from "@reduxjs/toolkit";
import paramsSlice from "../reducers/params/paramsSlice";

export default configureStore({
  //el reducer se encarga de actualizar el estado
  reducer: {
    params: paramsSlice,
  },
});
