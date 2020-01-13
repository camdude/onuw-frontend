import React from 'react';

import Home from './pages/Home';
import SetList from './pages/SetList';
import RoleSet from './pages/RoleSet';
import AddSet from './pages/AddSet';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/rolesets/add" component={AddSet}/>
      <Route path="/rolesets" component={SetList}/>
      <Route path="/set/:sid" component={RoleSet}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;