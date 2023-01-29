import {
  useAppDispatch,
  useAppSelector,
  changeName,
  changeCost,
  addCar,
} from "../store";
import type { ChangeEvent, FormEvent } from "react";

function CarForm() {
  const dispatch = useAppDispatch();
  const { name, cost } = useAppSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    let carCost = 0;
    if (e.target.value !== "") carCost = parseInt(e.target.value);
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form">
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
