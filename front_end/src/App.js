import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import User from './pages/User.js'
import Auth from './pages/Auth.js'
import Product from './pages/Product.js'
import ProductDetail from './pages/ProductDetail.js'
import MainNavigation from './share/Navigation/MainNavigation'
import Cart from './pages/Cart.js'
import Home from './pages/Home.js'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/category/:id" >
              <Home />
            </Route>
            <Route path="/product/:id" >
              <ProductDetail />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
