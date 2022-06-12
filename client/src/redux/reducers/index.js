import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import message from './messageReducer';
import modal from './modalReducer';
import homePosts from './postReducer';
import profile from './profileReducer';
import status from './statusReducer';
import detailPost from './detailPostReducer';
import notify from './notifyReducer';
import socket from './socketReducer';
import suggestions from './suggestionsReducer';
import online from './onlineReducer';
import peer from './peerReducer';

export default combineReducers({
  auth,
  alert,
  profile,
  status,
  homePosts,
  message,
  modal,
  detailPost,
  suggestions,
  socket,
  notify,
  online,
  peer,
});
