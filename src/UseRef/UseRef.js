// import { Button } from "bootstrap";
import React from "react";
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();

  function handleRef() {
    console.log(inputRef, "handleRef");
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleRef}>Click me </button>
    </div>
  );
};

export default UseRef;
