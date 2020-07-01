import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import User from './pages/User.js'
import Auth from './pages/Auth.js'
import ProductDetail from './pages/ProductDetail.js'
import MainNavigation from './share/Navigation/MainNavigation'
import Cart from './pages/Cart.js'
import Home from './pages/Home.js'

const App = () => {
  /*
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
  */
  return (
    <Router>
      <MainNavigation />
      <main>
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/category/:id" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact={true} component={Home} />
      </main>
    </Router>
    )
}

export default App;
