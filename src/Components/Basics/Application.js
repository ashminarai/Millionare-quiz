import React, { useState } from "react";
import "./Style.css";
import Trivia from "./Trivia";

const Application = () => {
  // creating useState Hook
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "After it stops raining, the umbrella becomes burden to people, what does it mean?",
      answers: [
        {
          text: "A. They find it difficult to carry umbrella",
          correct: false,
        },
        {
          text: "B. People dislike umbrella",
          correct: false,
        },
        {
          text: "C. When individuals fulfill their desires and encounter new faces, they often overlook the ones who have been there for them from the very start. They fail to acknowledge the unwavering support and presence of those individuals who have stood by them throughout their journey, leaving behind a sense of emotional neglect.",
          correct: true,
        },
        {
          text: "D. Umbrella is heavy so they don't like to carry it.",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When was I born?",
      answers: [
        {
          text: "A. 2000",
          correct: false,
        },
        {
          text: "B. 2001",
          correct: true,
        },
        {
          text: "C. 2003",
          correct: false,
        },
        {
          text: "D. 2002",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who is the friend that you miss the most but no longer speak with?",
      answers: [
        {
          text: "A. Sachin Dahal",
          correct: true,
        },
        {
          text: "B. Anjila Rai",
          correct: false,
        },
        {
          text: "C. Dipa Yakkha",
          correct: false,
        },
        {
          text: "D. Manoj Rai",
          correct: false,
        },
      ],
    },
    
  ];
  

  // defining a React functional component called MoneyPyramid.
  const moneyPyramid = [
    {
      id: 1,
      amount: "$ 100",
    },
    {
      id: 2,
      amount: "$ 200",
    },
    {
      id: 3,
      amount: "$ 300",
    },
    {
      id: 4,
      amount: "$ 500",
    },
    {
      id: 5,
      amount: "$ 1000",
    },
    {
      id: 6,
      amount: "$ 2000",
    },
    {
      id: 7,
      amount: "$ 4000",
    },
    {
      id: 8,
      amount: "$ 8000",
    },
    {
      id: 9,
      amount: "$ 16000",
    },
    {
      id: 10,
      amount: "$ 32000",
    },
    {
      id: 11,
      amount: "$ 64000",
    },
    {
      id: 12,
      amount: "$ 125000",
    },
    {
      id: 13,
      amount: "$ 250000",
    },
    {
      id: 14,
      amount: "$ 500000",
    },
    {
      id: 15,
      amount: "$ 1000000",
    },
  ].reverse();
  return (
    <>
      <div className="app">
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">
            <Trivia data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
          </div>
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Application;
