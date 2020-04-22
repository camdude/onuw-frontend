import React, { useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SetList from "./pages/SetList";
import RoleSet from "./pages/RoleSet";
import AddSet from "./pages/AddSet";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import Collection from "./pages/Collection";

const App = props => {
  const { token, login, logout, userId, userData } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/collection" component={Collection} />
        <Route path="/roleset/add" component={AddSet} />
        <Route path="/roleset/all" component={SetList} />
        <Route path="/roleset/:sid" component={RoleSet} />
        <Route path="/collection" component={Collection} />
        <Route path="/users/profile" component={Profile} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/roleset/all" component={SetList} />
        <Route path="/roleset/:sid" component={RoleSet} />
        <Route path="/users/signup" component={Signup} />
        <Route path="/users/login" component={Auth} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
        userData: userData,
        token: token,
        login: login,
        logout: logout
      }}
    >
      {routes}
    </AuthContext.Provider>
  );
};

export default App;
