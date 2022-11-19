import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "../ResultTable";

import "../styles/Result.css";

const Result = () => {
  const onRestart = () => {
    console.log("on restart clicked");
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tutions</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Earned Points</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Passed </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
      </div>
    </div>
  );
};

export default Result;
