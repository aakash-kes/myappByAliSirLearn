// import { type } from "@testing-library/user-event/dist/type";
import { Button } from "bootstrap";
import React, { useReducer } from "react";

const initialState = { count: 0 };
function reducerFun(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  return (
    <>
      <h1>Counting Here{state.count}</h1>
      <Button onClick={() => dispatch({ type: "increment" })}>increment</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>decrement</Button>
    </>
  );
};

export default UseReducerDemo;
