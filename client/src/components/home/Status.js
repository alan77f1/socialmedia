import React from 'react';
import Avatar from '../profile/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const Status = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="status my-3 d-flex">
      <Avatar src={auth.user.avatar} size="big-avatar" />

      <button className="statusBtn flex-fill" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
        {auth.user.username} ơi, bạn cần ghi chú gì không?
      </button>
    </div>
  );
};

export default Status;
