import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from './VendingMachine';
import FreshSardines from './FreshSardines';
import Soda from './Soda';
import Chips from './Chips';
import NavBar from './NavBar';


import './App.css';

function App() {
  return (
      <BrowserRouter>
        <NavBar to=""/>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/sardines">
            <FreshSardines />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
