import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = (props) => {
  const firstLogin = localStorage.getItem('firstLogin');
  // ...props get params of the Route
  return firstLogin ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRouter;
