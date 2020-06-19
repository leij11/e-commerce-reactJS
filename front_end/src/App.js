import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import User from './user/pages/User.js'
import Product from './product/pages/Product.js'
import Home from './Home.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
