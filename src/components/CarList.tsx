import { useAppSelector, useAppDispatch, removeCar } from "../store";

function CarList() {
  const dispatch = useAppDispatch();
  const cars = useAppSelector((state) => {
    // cars가 연달아서 참조되지만 정상임 : reducer name -> initial state 의 cars 프로퍼티
    // 하지만, 다른 개발자가 볼 때 에러라고 오해할 수 있어서 initial state 프로퍼티를 data로 바꿈
    return state.cars.data;
  });

  const handleCarDelete = (id: string) => {
    dispatch(removeCar(id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            handleCarDelete(car.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
