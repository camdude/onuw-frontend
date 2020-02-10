import React, { useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SetList from "./pages/SetList";
import RoleSet from "./pages/RoleSet";
import AddSet from "./pages/AddSet";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import { AuthContext } from "./context/auth-context";

const App = props => {
  const [userId, setUserId] = useState(false);
  const [username, setUsername] = useState(false);

  const login = useCallback((uid, uname) => {
    setUserId(uid);
    setUsername(uname);
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setUsername(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        username: username,
        login: login,
        logout: logout
      }}
    >
      {userId ? (
        <Switch>
          <Route path="/roleset/add" component={AddSet} />
          <Route path="/roleset/all" component={SetList} />
          <Route path="/roleset/:sid" component={RoleSet} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/users/signup" component={Signup} />
          <Route path="/users/login" component={Auth} />
          <Route path="/roleset/all" component={SetList} />
          <Route path="/roleset/:sid" component={RoleSet} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      )}
    </AuthContext.Provider>
  );
};

export default App;
