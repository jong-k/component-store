import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

interface InitialStateType {
  name: string;
  cost: number;
}
const initialState: InitialStateType = {
  name: "",
  cost: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  // addCar action이 발생하면 form을 비우기 위해 extra reducer 설정
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
