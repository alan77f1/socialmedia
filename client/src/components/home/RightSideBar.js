import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../common/UserCard';
import FollowBtn from '../common/FollowBtn';
import LoadIcon from '../../assets/images/loading.gif';
import { getSuggestions } from '../../redux/actions/suggestionsAction';

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center my-2">
        <h6 className="text-black">Gợi ý cho bạn</h6>
        {!suggestions.loading && (
          <h6 // className="fas fa-redo"
            className="text-black"
            style={{ cursor: 'pointer', marginLeft: '120px' }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          >
            Xem thêm
          </h6>
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}

      <div style={{ opacity: 0.5 }} className="my-2">
        <a
          href="https://www.facebook.com/profile.php?id=100033670082606"
          target="_blank"
          rel="noreferrer"
          style={{ wordBreak: 'break-all' }}
        >
          Liên Hệ
        </a>
        <small className="d-block">Chào Mừng Đến Với UTC2 News</small>

        <small>&copy; 2022 MẠNG XÃ HỘI UTC2 FROM BÙI VĂN TÂN</small>
      </div>
    </div>
  );
};

export default RightSideBar;
