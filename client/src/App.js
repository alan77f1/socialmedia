import { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import RouterRender from './routes/RouterRender';
import PrivateRouter from './routes/PrivateRouter';

import Home from './features/home';
import Login from './features/login';
import Register from './features/register';
import Forgot from './features/forgotPassword';
import Reset from './features/resetPassword';

import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import StatusModal from './components/home/create_post/StatusModal';
import NotFound from './components/NotFound';

import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { getSuggestions } from './redux/actions/suggestionsAction';

import io from 'socket.io-client';
import { GLOBALTYPES } from './redux/actions/globalTypes';
import Socket from './socket';
import { getNotifies } from './redux/actions/notifyAction';

function App() {
  const { auth, status, modal } = useSelector((state) => state);
  const { isLogged } = auth;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  // useEffect(() => {
  //   if (!('Notification' in window)) {
  //     alert('This browser does not support desktop notification');
  //   } else if (Notification.permission === 'granted') {
  //   } else if (Notification.permission !== 'denied') {
  //     Notification.requestPermission().then(function (permission) {
  //       if (permission === 'granted') {
  //       }
  //     });
  //   }
  // }, []);

  return (
    <Router>
      <Alert />

      <div className={`App ${(status || modal) && 'mode'}`}>
        {auth.token && <Header />}

        {status && <StatusModal />}
        {auth.token && <Socket />}

        <Route exact path="/" component={auth.token ? Home : Login} />
        <Route exact path="/register" component={isLogged ? NotFound : Register} />
        <Route exact path="/forgot_password" component={isLogged ? NotFound : Forgot} />
        <Route exact path="/reset/:token" component={isLogged ? NotFound : Reset} />

        <PrivateRouter exact path="/:page" component={RouterRender} />
        <PrivateRouter exact path="/:page/:id" component={RouterRender} />
      </div>
    </Router>
  );
}

export default App;
