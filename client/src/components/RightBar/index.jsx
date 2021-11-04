import React, { useEffect, useState } from 'react';
import './RightBar.css';
import axios from 'axios';

RightBar.propTypes = {};

function RightBar({ currentUser }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      const friendsRes = await axios.get(`/users/${currentUser._id}/friends`);
      setFriends(friendsRes.data);
    })();
  }, [currentUser]);

  return (
    <div className='rightBar'>
      FriendRequest
      <hr className='rightBarHr' />
      Ads
      <hr className='rightBarHr' />
      OnlineFriend
    </div>
  );
}

export default RightBar;
