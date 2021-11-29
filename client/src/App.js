// import { useContext, useEffect, useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import './App.css';
// import Chat from './components/Chat';
// import { AuthContext } from './context/AuthProvider';
// import Home from './pages/home';
// import Login from './pages/login';
// import Register from './pages/register';
// import Profile from './pages/profile';
// import Story from './pages/story';

// function App() {
//   const { user: currentUser } = useContext(AuthContext);

//   // Ifsocket
//   const socket = useRef();
//   useEffect(() => {
//     socket.current = io('ws://localhost:8900');
//   }, []);

//   return (
//     <Router>
//       {currentUser ? <Home /> : <Register />}
//       <Switch>
//         <Route path="/" exact>
//           <Route path="/register"></Route>
//           <Route path="/profile/:username"></Route>
//           <Route path="/stories">{currentUser ? <Story /> : <Login />}</Route>
//         </Route>
//         <Profile />
//       </Switch>

//       <Chat />
//     </Router>
//   );
// }

// export default App;

import Home from './pages/home/';
import Login from './pages/login';
import Profile from './pages/profile';
import Register from './pages/register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Messenger from './pages/messenger/Messenger';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
        <Route path="/messenger">{!user ? <Redirect to="/" /> : <Messenger />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
