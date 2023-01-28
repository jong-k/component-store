import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  carsSlice,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";
import { formSlice, changeName, changeCost } from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    form: formSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { changeSearchTerm, addCar, removeCar, changeName, changeCost };
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
