import { createBrowserRouter } from "react-router-dom";
import { Register } from "../pages/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
]);
