import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import User from './user/pages/User.js'
import Auth from './user/pages/Auth.js'
import Product from './product/pages/Product.js'
import MainNavigation from './share/Navigation/MainNavigation'
import Home from './Home.js'
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/product/:pid" exact>
              <Product />
            </Route>
            <Route path="/category/:id">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
