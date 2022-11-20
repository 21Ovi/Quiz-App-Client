import React, { useState, useEffect } from "react";

import data from "../database/data";

// custom hook
import { useFetchQuestion } from "../hooks/FetchQuestion";

const Questions = () => {
  const [check, setCheck] = useState(undefined);

  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = data[0];

  useEffect(() => {
    console.log(isLoading);
    // console.log(apiData);
    // console.log(serverError);
  }, []);

  const onSelect = () => {
    // setCheck(true);
    // console.log("radio button change");
  };

  return (
    <div className="questions">
      <h2 className="text-light">{questions.question}</h2>
      <ul key={questions.id}>
        {questions.options.map((q, i) => (
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
