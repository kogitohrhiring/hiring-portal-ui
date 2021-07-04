import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserService from "../services/keyCloakService";

export function PrivateRoute({ component: Component, roles, ...rest }) {

  useEffect(() => {
    if (!UserService.isLoggedIn()) {
      UserService.doLogin();
    }
  }, []);

  const isAuthorized = (roles) => {
    return UserService.hasRole(roles);
  }


  return (
    <Route
      {...rest}
      render={props => {
        return UserService.isLoggedIn() && isAuthorized(roles)
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/jobs', }} />
      }}
    />
  )
}