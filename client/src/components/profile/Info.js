import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';
import EditProfile from './EditProfile';
// import ChangePassword from "./changePassword";
import FollowBtn from '../FollowBtn';
import Followers from './Followers';
import Following from './Following';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import Status from '../home/Status';

const Info = ({ id, auth, profile, dispatch }) => {
  const [userData, setUserData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [id, auth, dispatch, profile.users]);
  // click status modal
  useEffect(() => {
    if (showFollowers || showFollowing || onEdit) {
      dispatch({ type: GLOBALTYPES.MODAL, payload: true });
    } else {
      dispatch({ type: GLOBALTYPES.MODAL, payload: false });
    }
  }, [showFollowers, showFollowing, onEdit, dispatch]);

  return (
    <div className="info">
      {userData.map((user) => (
        <div className="info_container" key={user._id}>
          <Avatar src={user.avatar} size="supper-avatar" />

          <div className="mainIntroduce">
            <div className="container_content">
              <div className="container_content-title">
                <h3>@{user.username}</h3>

                {user._id === auth.user._id ? (
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: '50px' }}
                    onClick={() => setOnEdit(true)}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <FollowBtn user={user} />
                )}
              </div>
              <div className="follow_btn pading">
                <span className="mr-4" onClick={() => setShowFollowers(true)}>
                  {user.followers.length} Người theo dõi
                </span>
                <span className="ml-4" onClick={() => setShowFollowing(true)}>
                  {user.following.length} Đang theo dõi
                </span>
              </div>
              <div className="pading"></div>
              Tên đầy đủ <span>{user.fullname}</span>
              <br />
              <div className="pading"></div>
              Số điện thoại <span className="text-danger">{user.mobile}</span>
              <br />
              Sống tại <span className="m-0">{user.address}</span>
              <h6 className="m-0">{user.email}</h6>
            </div>
          </div>

          <Status />
          {onEdit && <EditProfile setOnEdit={setOnEdit} />}
          {/* {onEdit && <ChangePassword setOnEdit={setOnEdit} />} */}

          {showFollowers && (
            <Followers users={user.followers} setShowFollowers={setShowFollowers} />
          )}
          {showFollowing && (
            <Following users={user.following} setShowFollowing={setShowFollowing} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
