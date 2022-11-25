import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

// redux actions
import * as Action from "../redux/question_reducer";

// Fetch question hook to fetch API data and set value to store
export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function fetch backend data
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
          (data) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { questions, answers } }));

          //   dispatch an action
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No Question Avaialbe");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

// MoveAction Dispatch Function

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); // increase trace by 1
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevtQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); // decrease trace by 1
  } catch (error) {
    console.log(error);
  }
};
