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
