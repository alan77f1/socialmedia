import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './features/home';
import Login from './features/login';
import Register from './features/register';
import Forgot from './features/forgotPassword';
import Reset from './features/resetPassword';
import NotFound from './components/common/NotFound';
import Alert from './components/alert/Alert';

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <Router>
      <Alert />
      <section>
        <Switch>
          {/* <Route exact path="/" component={auth.token ? Home : Login} />
          <Route
            path="/register"
            component={isLogged ? NotFound : Register}
            exact
          />
          <Route
            path="/forgot_password"
            component={isLogged ? NotFound : Forgot}
            exact
          /> */}
          <Route path="/reset/:token" component={isLogged ? NotFound : Reset} exact />
        </Switch>
      </section>
    </Router>
  );
}

export default Body;
