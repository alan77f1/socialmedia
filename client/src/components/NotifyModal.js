import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoNotice from '../assets/images/notice.png';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { isReadNotify, deleteAllNotifies } from '../redux/actions/notifyAction';

const NotifyModal = () => {
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIsRead = (msg) => {
    dispatch(isReadNotify({ msg, auth }));
  };

  const handleDeleteAll = () => {
    const newArr = notify.data.filter((item) => item.isRead === false);
    if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token));
    return dispatch(deleteAllNotifies(auth.token));
  };

  return (
    <div style={{ minWidth: '425px' }}>
      <div className="d-flex justify-content-between align-items-center px-3">
        <h4 style={{ margin: '15px 0' }}>Thông Báo</h4>
      </div>

      {notify.data.length === 0 && <img src={NoNotice} alt="NoNotice" style={{ width: '395px' }} />}

      <div style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
        {notify.data.map((msg, index) => (
          <div key={index} className="px-2 mb-3">
            <Link to={`${msg.url}`} className="d-flex text-dark align-items-center" onClick={() => handleIsRead(msg)}>
              <Avatar src={msg.user.avatar} size="big-avatar" />

              <div className="mx-1 flex-fill">
                <div>
                  <strong className="mr-1">{msg.user.username}</strong>
                  <span>{msg.text}</span>
                </div>
              </div>

              {msg.image && (
                <div style={{ width: '30px' }}>
                  {msg.image.match(/video/i) ? (
                    <video src={msg.image} width="100%" />
                  ) : (
                    <Avatar src={msg.image} size="medium-avatar" />
                  )}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>

      <hr className="my-1" />
      <div
        className="text-right mr-2"
        style={{ cursor: 'pointer', color: 'black', padding: '10px', margin: '10px 0 3px 0' }}
        onClick={handleDeleteAll}
      >
        Xoá Tất Cả
      </div>
    </div>
  );
};

export default NotifyModal;
