import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { customIncrease, decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterState);
  return (
    <div>
      <h1>counter view</h1>
      <p>{counterState.count}</p>
      <button onClick={() => dispatch(increment())}>increse</button>
      <button onClick={() => dispatch(decrement())}>decrese</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(customIncrease(5))}>
        increse by amount
      </button>
    </div>
  );
};

export default CounterView;
