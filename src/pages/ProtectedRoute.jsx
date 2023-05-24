import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const ProtectedRoute = ({ auth, element: Element, ...rest }) => {
  // const navigate=useNavigate();
  return (
    <Route
      {...rest}
      element={(props) => {
        if (auth) return <Element {...props} />;
        if (!auth)
          return (
            <Navigate
              to={{ path: "/", state: { from: props.location } }}
              replace
            />
          );
      }}
    />
  );
};
