import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import './App.css';
import Header from './components/Header';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';

function App() {
  const { user: currentUser } = useContext(AuthContext);
  return (
    <Router>
      {currentUser && <Header />}
      <Switch>
        <Route path='/profile'>{currentUser ? <Profile /> : <Login />}</Route>
        <Route path='/' exact>
          {currentUser ? <Home /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
