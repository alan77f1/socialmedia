import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../redux/actions/profileAction';

const FollowBtn = ({ user }) => {
  const [followed, setFollowed] = useState(false);

  const { auth, profile, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (auth.user.following.find((item) => item._id === user._id)) {
      setFollowed(true);
    }
    return () => setFollowed(false);
  }, [auth.user.following, user._id]);

  const handleFollow = async () => {
    if (load) return;

    setFollowed(true);
    setLoad(true);
    await dispatch(follow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  const handleUnFollow = async () => {
    if (load) return;

    setFollowed(false);
    setLoad(true);
    await dispatch(unfollow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  return (
    <>
      {followed ? (
        <dev
          className="btn btn-light border"
          onClick={handleUnFollow}
          style={{ fontSize: '17px', fontWeight: '500', lineHeight: '30px', borderRadius: '30px' }}
        >
          Bỏ theo dõi
        </dev>
      ) : (
        <dev
          className="btn btn-warning "
          style={{ color: '#ffffff', fontSize: '17px', fontWeight: '500', lineHeight: '30px' }}
          onClick={handleFollow}
        >
          Theo dõi
        </dev>
      )}
    </>
  );
};

export default FollowBtn;
