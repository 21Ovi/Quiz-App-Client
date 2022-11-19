import React from "react";
import Questions from "./Questions";

const Quiz = () => {
  // Next button event handler
  const onNext = () => {
    console.log("on next click");
  };

  // Previous button event handler
  const onPrev = () => {
    console.log("on prev click");
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
