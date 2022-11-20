import React, { useEffect } from "react";
import Questions from "./Questions";

// redux store import
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevtQuestion } from "../hooks/FetchQuestion";

const Quiz = () => {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  // Next button event handler
  const onNext = () => {
    console.log("on next click");

    if (trace < queue.length) {
      // update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion());
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

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions />

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
