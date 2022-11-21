import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ResultTable from "./ResultTable";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

//import actions
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

import "../styles/Result.css";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(userName);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  const userName = useSelector((state) => state.result.userId);

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userName}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts :</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earned Points</span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? "#2AFF95" : "#FF2A66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}{" "}
          </span>
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
