import { useAppDispatch, useAppSelector, changeSearchTerm } from "../store";
import { type ChangeEvent } from "react";

function CarSearch() {
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.cars.searchTerm);

  const handleChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label" htmlFor="">
          Search
        </label>
        <input
          className="input"
          value={searchTerm}
          type="text"
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}

export default CarSearch;
