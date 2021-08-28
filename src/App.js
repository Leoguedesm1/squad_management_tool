import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Topbar, Bottombar, BackgroundContainer } from './components/index';

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

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>New Team</h2>;
}