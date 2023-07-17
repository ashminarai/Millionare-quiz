import React, { useState, useEffect, useMemo } from "react";
import "./Style.css";
import Trivia from "./Trivia";
import Timer from "./Timer";
import Start from "./Start";
const Application = () => {
  // creating useState Hook
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question:
        "After it stops raining, the umbrella becomes burden to people, what does it mean?",
      answers: [
        {
          text: "A. They think it is not necessary to carry umbrella anymore.",
          correct: false,
        },
        {
          text: "B. They like to stay in sun.",
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
      question:
        "One day in a retrospect, a years of struggle will strike you as the most beautiful, what does this statement mean?",
      answers: [
        {
          text: "A. After some years, you will get successful.",
          correct: false,
        },
        {
          text: "B. You will overcome failure",
          correct: false,
        },
        {
          text: "C. You hard will pay off.",
          correct: true,
        },
        {
          text: "D. None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Buddha was born in?",
      answers: [
        {
          text: "A. China",
          correct: false,
        },
        {
          text: "B. Nepal",
          correct: true,
        },
        {
          text: "C. India",
          correct: false,
        },
        {
          text: "D. Bhutan",
          correct: false,
        },
      ],
    }
  ];

  // defining a React functional component called MoneyPyramid.
  const moneyPyramid = useMemo(
    () =>
      [
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
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <>
      <div className="app">
        {!username ? (
          <Start setUsername={setUsername} />
        ) : (
          <>
            <div className="main">
              {timeOut ? (
                <h1 className="endText">You earned: {earned}</h1>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}
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
          </>
        )}
      </div>
    </>
  );
};

export default Application;
