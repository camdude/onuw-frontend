import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SetList from "./pages/SetList";
import RoleSet from "./pages/RoleSet";
import AddSet from "./pages/AddSet";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import { AuthContext } from "./context/auth-context";

const App = () => {
  return (
    <AuthContext.Provider
      value={{
        userId: null,
        username: null
      }}
    >
      <Switch>
        <Route path="/users/signup" component={Signup} />
        <Route path="/users/login" component={Auth} />
        <Route path="/roleset/add" component={AddSet} />
        <Route path="/roleset/all" component={SetList} />
        <Route path="/roleset/:sid" component={RoleSet} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;
