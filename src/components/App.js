import React from "react";
import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
