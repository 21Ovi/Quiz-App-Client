import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const attempts_Number = (result) => {
  return result.filter((r) => r !== undefined).length;
};
export const earnPoints_Number = (result, answers, points) => {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => points)
    .reduce((prev, curr) => prev + curr, 0);
};

export const flagResult = (totalPoints, earnedPoints) => {
  return (totalPoints * 50) / 100 < earnedPoints; // Earn 50% of marks to pass
};

// Check user Auth
export const CheckUserExist = ({ children }) => {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
};
