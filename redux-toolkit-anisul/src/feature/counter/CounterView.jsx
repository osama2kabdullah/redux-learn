import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { customIncrease, decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter view</h1>
      <p>{counterState.count}</p>
      <div style={{display: 'flex', gap: '1em'}}>
      <Button onClick={() => dispatch(increment())}>increse</Button>
      <Button onClick={() => dispatch(decrement())}>decrese</Button>
      <Button onClick={() => dispatch(reset())}>reset</Button>
      <Button onClick={() => dispatch(customIncrease(5))}>
        increse by amount
      </Button>
      </div>
    </div>
  );
};

export default CounterView;
