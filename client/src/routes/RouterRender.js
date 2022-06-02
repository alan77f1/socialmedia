import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import { useSelector } from 'react-redux';

const generateRouter = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const RouterRender = () => {
  const { page, id } = useParams();
  const { auth } = useSelector((state) => state);

  let pageName = '';

  if (auth.token) {
    if (id) {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}`;
    }
  }

  return generateRouter(pageName);
};

export default RouterRender;
