import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';
import EditProfile from './EditProfile';
// import ChangePassword from "./changePassword";
import FollowBtn from '../FollowBtn';
import Followers from './Followers';
import Following from './Following';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import Status from '../home/Status';
import ImgBuilding from '../../assets/images/building.jpg';

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
          <div className="profileTop">
            <img src={ImgBuilding} alt="" className="profileTopCoverImg" />
            <div className="profileTopWrap">
              <div className="profileTopAvatar">
                <div className="profileTopAvatarImg">
                  <Avatar src={user.avatar} size="supper-avatar" />
                </div>
              </div>
              <div className="profileTopInfo">
                <h3>@{user.username}</h3>
              </div>

              <div className="container_content-title">
                {user._id === auth.user._id ? (
                  <button className="btn btn-primary" style={{ borderRadius: '50px' }} onClick={() => setOnEdit(true)}>
                    Chỉnh sửa
                  </button>
                ) : (
                  <FollowBtn user={user} />
                )}
              </div>
              <hr className="profileTopHr" />
            </div>
          </div>

          <div className="container_introduce">
            <div className="container_content">
              <div className="follow_btn pading">
                <span className="mr-2" onClick={() => setShowFollowers(true)}>
                  {user.followers.length} Người theo dõi
                </span>
                <span className="ml-2" onClick={() => setShowFollowing(true)}>
                  {user.following.length} Đang theo dõi
                </span>
              </div>
              <div className="pading">
                <span>Tên đầy đủ {user.fullname}</span>
              </div>
              <div className="pading">
                <span>Số điện thoại {user.mobile}</span>
              </div>

              <span className="m-0 pading">Sống tại {user.address}</span>
              <h6 className="m-0 pading">{user.email}</h6>
            </div>
          </div>

          {onEdit && <EditProfile setOnEdit={setOnEdit} />}
          {/* {onEdit && <ChangePassword setOnEdit={setOnEdit} />} */}

          {showFollowers && <Followers users={user.followers} setShowFollowers={setShowFollowers} />}
          {showFollowing && <Following users={user.following} setShowFollowing={setShowFollowing} />}
        </div>
      ))}
    </div>
  );
};

export default Info;
