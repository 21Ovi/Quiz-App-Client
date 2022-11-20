import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// custom hook
import { useFetchQuestion } from "../hooks/FetchQuestion";

const Questions = () => {
  const [check, setCheck] = useState(undefined);

  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    console.log(questions);
  });

  const onSelect = () => {
    // console.log("radio button change");
  };

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (isLoading)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={check}
              name="options"
              id={`q${i}-options`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-options`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
