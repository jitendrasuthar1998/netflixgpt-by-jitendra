import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <PrivateRoute>
          <Browse />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
