import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './components/counterActions';

/**
 * redux thinking
 * 1. state
 * 2. actions
 * 3. reducers
 * 5. store
 * 6. provide store from root component
 */

const App = () => {
  const states = useSelector(state=>state);
  const dispatch = useDispatch();
  
  const incrementHandle = () => {
    dispatch(incrementCounter())
  }
  const decrementHandle = () => {
    dispatch(decrementCounter())
  }
  const resetHandle = () => {
    dispatch(resetCounter())
  }

  return (
    <>
      <h1>Hi.</h1>
      <p>count <b>{states.count}</b></p>
      <button onClick={incrementHandle}>increment</button>
      <button onClick={decrementHandle}>increment</button>
      <button onClick={resetHandle}>increment</button>
    </>
  );
};

export default App;