import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/new_team">
            <Users />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>New Team</h2>;
}