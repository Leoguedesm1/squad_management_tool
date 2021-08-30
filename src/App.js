import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Topbar, Bottombar, BackgroundContainer } from './components/index';
import { Home, NewTeam } from './screens/index';

import AppProvider from './context';

export default function App() {
  return (
    <Router>
        <AppProvider>
          <Topbar />
          
          <BackgroundContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/new_team" component={NewTeam} />
            </Switch>
          </BackgroundContainer>

          <Bottombar />
        </AppProvider>
    </Router>
  );
}


function Users() {
  return <h2>New Team</h2>;
}