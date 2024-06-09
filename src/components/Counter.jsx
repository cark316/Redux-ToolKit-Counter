import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  setZero
} from "../state/counter/counterSlice";

const Counter = () => {
  const buttonClass = "p-4 m-2 border-2 border-black rounded-xl";
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>{count}</h2>
      <div>
        <button className={buttonClass} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className={buttonClass} onClick={() => dispatch(incrementAsync(12))}>
          Async Increment by 12
        </button>
        <button
          className={buttonClass}
          onClick={() => dispatch(incrementByAmount(20))}
        >
          Increment by 20
        </button>
        <button className={buttonClass} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className={buttonClass} onClick={() => dispatch(setZero())}>
          Set to zero
        </button>
      </div>
    </div>
  );
};

export default Counter;