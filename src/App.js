import React from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import Home from "./home/Home";
import Raids from "./raids/Raids";
import Players from "./players/Players";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Sigma Auberdine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/raids">Raids</Nav.Link>
              <Nav.Link href="/players">Players</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/raids">
          <Raids />
          </Route>
          <Route path="/players">
          <Players />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
