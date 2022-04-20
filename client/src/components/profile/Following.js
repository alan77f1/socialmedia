import React from 'react';
import UserCard from '../common/UserCard';
import FollowBtn from '../common/FollowBtn';
import { useSelector } from 'react-redux';

const Following = ({ users, setShowFollowing }) => {
  const { auth } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_box">
        <h5 className="text-center">Đang Theo Dõi</h5>
        <hr />

        <div className="follow_content">
          {users.map((user) => (
            <UserCard key={user._id} user={user} setShowFollowing={setShowFollowing}>
              {auth.user._id !== user._id && <FollowBtn user={user} />}
            </UserCard>
          ))}
        </div>

        <div className="follow_close" onClick={() => setShowFollowing(false)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Following;
