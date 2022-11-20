import { combineReducer, configureStore } from "reduxjs/toolkit";

// call reducers
import questionReducer from "./question_reducer";
import { resultReducer } from "./result_reducer";

const rootReducer = combineReducer({
  questions: questionReducer,
  result: resultReducer,
});

// create store with reducer
export default configureStore({ reducer: rootReducer });
