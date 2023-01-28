import { createSlice, nanoid } from "@reduxjs/toolkit";

interface CarType {
  name: string;
  cost: number;
  id: string;
}
interface InitialStateType {
  searchTerm: string;
  data: CarType[];
}
const initialState: InitialStateType = {
  searchTerm: "",
  data: [],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      const newCar: CarType = {
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      };
      state.data.push(newCar);
    },
    removeCar(state, action) {
      const newCars: CarType[] = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = newCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
