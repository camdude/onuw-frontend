import React from 'react';

import Home from './pages/Home';
import RoleSets from './pages/RoleSets';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/rolesets" component={RoleSets}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;