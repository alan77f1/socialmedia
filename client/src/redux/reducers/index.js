import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import profile from './profileReducer';
import status from './statusReducer';
import homePosts from './postReducer';
import modal from './modalReducer';
import discover from './discoverReducer';
import detailPost from './detailPostReducer';

import suggestions from './suggestionsReducer';
import socket from './socketReducer';
import notify from './notifyReducer';

export default combineReducers({
  auth,
  alert,
  profile,
  status,
  homePosts,
  discover,
  modal,
  detailPost,
  suggestions,
  socket,
  notify,
});
