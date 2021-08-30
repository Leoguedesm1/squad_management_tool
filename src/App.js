import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Topbar, Bottombar, BackgroundContainer } from './components/index';
import { Home, } from './screens/index';

export default function App() {
  return (
    <Router>
        <Topbar />
        
        <BackgroundContainer>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/new_team">
              <Users />
            </Route>
          </Switch>
        </BackgroundContainer>

        <Bottombar />
    </Router>
  );
}


function Users() {
  return <h2>New Team</h2>;
}