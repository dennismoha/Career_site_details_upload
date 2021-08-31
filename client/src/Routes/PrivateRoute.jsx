import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import studentRegisterContext from "../context/Register/studentRegisterContext";

function PrivateRoute({ component: Component, ...rest }) {
  const authContext = useContext(studentRegisterContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PrivateRoute;
