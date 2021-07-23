import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import UserService from "../services/keyCloakService";
import ErrorComponent from "../components/Templates/ErrorComponent/ErrorComponent";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  useEffect(() => {
    if (!UserService.isLoggedIn()) {
      UserService.doLogin();
    }
  }, []);

  const isAuthorized = (roles) => {
    return UserService.hasRole(roles);
  };

  const Unauthorized = {
    message: "You are not authorized to access this page",
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return UserService.isLoggedIn() ? (
          isAuthorized(roles) ? (
            <Component {...props} />
          ) : (
            <ErrorComponent error={Unauthorized} />
          )
        ) : (
          <Redirect to={{ pathname: "/jobs" }} />
        );
      }}
    />
  );
}
