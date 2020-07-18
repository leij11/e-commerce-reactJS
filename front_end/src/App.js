import './App.css';
import React, { useState, useCallback,Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import MainNavigation from './share/Navigation/MainNavigation'
import LoadingSpinner from './share/UIElements/LoadingSpinner'
import { AuthContext } from './share/context/auth-context.js';

const User=React.lazy(()=>import('./pages/User.js'));
const Auth=React.lazy(()=>import('./pages/Auth.js'));
const Product =React.lazy(()=>import('./pages/Product.js'));
const Cart=React.lazy(()=>import('./pages/Cart.js'));
const Main=React.lazy(()=>import('./pages/Main.js'));
const Shipping=React.lazy(()=>import('./pages/Shipping.js'));
const FinalPage=React.lazy(()=>import('./pages/FinalPage.js'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
      <Route path="/product/:id" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/category/:id" component={Main} />
      <Route path="/auth" component={Auth} />
      <Route path="/shipping" exact={true} component={Shipping} />
      <Route path="/" exact={true} component={Main} />
      <Route path="/user" exact={true} component={User} />
      <Route path="/finalpage" exact={true} component={FinalPage} />
      </Switch>
    )
  }
  else{
    routes=(
      <Switch>
      <Route path="/product/:id" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/category/:id" component={Main} />
      <Route path="/auth" component={Auth} />
      <Route path="/" exact={true} component={Main} />
      </Switch>
    )
  }
  return (
    <AuthContext.Provider
  value={{
    isLoggedIn: isLoggedIn,
    userId: userId,
    login: login,
    logout: logout
  }}
>
<Router>
  <MainNavigation />
  <main>
    <Suspense
      fallback={
        <div className="center">
          <LoadingSpinner/>
        </div>
      }>
      {routes}
    </Suspense>
  </main>
</Router>
</AuthContext.Provider>
    )
}

export default App;
