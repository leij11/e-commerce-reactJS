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
import SideDrawer from './share/Navigation/SideDrawer';
import Header from './share/Navigation/Header'
const App = () => {
  return (
    <Router>
      <SideDrawer />
      <Header />

      <Switch>
            <Route path="/" exact>
              <Product />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
    </Router>
  );
}

export default App;
