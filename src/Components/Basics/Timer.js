// import { useState, useEffect } from "react";

// export default function Timer() {
//   const [timer, setTimer] = useState(30);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);
//   });

//   return timer;
// }


// import React, { useState, useEffect } from "react";

// const Timer = ({ setTimeOut, questionNumber }) => {
//   const [seconds, setSeconds] = useState(30);

//   useEffect(() => {
//     if (seconds === 0) {
//       setTimeOut(true);
//     }

//     const timer = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds - 1);
//     }, 1000);

//     useEffect

//     return () => clearInterval(timer);
//   }, [seconds, setTimeOut]);

//   return <>{seconds}</>;
// };

// export default Timer;

import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}