import "./Counter.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleIncrement, handleReset } from "../../Redux/Slices/CounterSlice";
import { handleDecrement } from "../../Redux/Slices/CounterSlice";
export default function Counter() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  function Increment() {
    setCount(count + 1);
    dispatch(handleIncrement(10));
  }
  function Decrement() {
    setCount(count - 1);
    dispatch(handleDecrement());
  }
  function Reset() {
    setCount(0);
    dispatch(handleReset())
  }

  return (
    <>
    <div className="counter">
      <div>
        <h2>Counter {count}</h2>
      </div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}
