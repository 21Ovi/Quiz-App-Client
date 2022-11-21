import React, { useState, useEffect } from "react";
import Questions from "./Questions";

// redux store import
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevtQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setCheck] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });

  // Next button event handler
  const onNext = () => {
    console.log("on next click");

    if (trace < queue.length) {
      // update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion());

      dispatch(PushAnswer(check));
    }
  };

  // Previous button event handler
  const onPrev = () => {
    console.log("on prev click");

    if (trace > 0) {
      // update the trace value by one using MovePrevQuestion
      dispatch(MovePrevtQuestion());
    }
  };

  const onCheck = (check) => {
    console.log(check);
    setCheck(check);
  };

  // Finished Exam after the last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onCheck={onCheck} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
