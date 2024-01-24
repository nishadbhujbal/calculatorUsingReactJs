import React, { useState } from "react";
import "./style.css";

const Interface = () => {
  const values = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  const [clickValue, setClickValue] = useState("");
  const [display, setDisplay] = useState([""]);

  const getValue = (value) => {
    setClickValue(value);
    if (value === "AC") {
      setDisplay([""]);
    } else if (value === "DEL") {
      setDisplay((previousState) => {
        const lastEntry = previousState[previousState.length - 1];
        const newLastEntry = lastEntry.slice(0, -1);
        return [...previousState.slice(0, -1), newLastEntry];
      });
    } else if (value === "=") {
      const x = eval(display[0]);
      setDisplay(x);
    } else {
      setDisplay((previousState) => {
        const lastEntry = previousState[previousState.length - 1];
        return [...previousState.slice(0, -1), lastEntry + value];
      });
    }
  };

  return (
    <div className="App h-screen flex justify-center items-center">
      <div className="h-[450px] w-[320px] bg-[#272829] rounded-2xl p-6">
        <div className="bg-[#BFCFE7] h-20 rounded-t-2xl mb-2 flex items-end">
          <p className="display w-[100%] flex justify-end font-semibold text-4xl pr-2 text-[#161718] tracking-2">
            {display}
          </p>
        </div>
        <div className="bg-[#272829] h-80 rounded-b-2xl grid grid-cols-4 grid-row gap-2">
          {values.map((curElem, index) => {
            return (
              <div
                className="display border border-black rounded-sm bg-gray-300 grid place-content-center text-2xl cursor-pointer"
                onClick={() => getValue(curElem)}
                key={index}
              >
                {curElem}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Interface;
