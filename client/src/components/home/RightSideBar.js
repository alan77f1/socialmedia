import { useDispatch, useSelector } from 'react-redux';
import { getSuggestions } from '../../redux/actions/suggestionsAction';
import LoadIcon from '../../assets/images/loading.gif';
import FollowBtn from '../button/FollowBtn';
import UserCard from '../UserCard';

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex align-items-center my-2">
        <h6 className="text-black" style={{ color: '#9A9CA1', marginLeft: '20px' }}>
          Gợi ý cho bạn
        </h6>
        {!suggestions.loading && (
          <h6 // className="fas fa-redo"
            className="text-black"
            style={{ cursor: 'pointer', marginLeft: '125px', color: '#9A9CA1' }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          >
            Xem thêm
          </h6>
        )}
      </div>

      {suggestions.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions ">
          {suggestions.users.map((user) => (
            <div className="suggestions_item">
              <UserCard key={user._id} user={user}>
                <FollowBtn user={user} />
              </UserCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
