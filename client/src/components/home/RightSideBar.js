import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../UserCard';
import FollowBtn from '../FollowBtn';
import LoadIcon from '../../assets/images/loading.gif';
import UTC2Ads from '../../assets/images/utc2ads.jpg';
import UTC2News from '../../assets/images/utc2media.jpg';
import { getSuggestions } from '../../redux/actions/suggestionsAction';

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <div className="ads">
        <div className="adsTitle">Được tài trợ</div>
        <ul className="adsList">
          <li className="adsItem">
            <a rel="noreferrer" target="_blank" href="https://timviecnhanh.com/">
              <img src={UTC2Ads} alt="" className="adsItemImg" />
              <div className="adsItemContent">
                <div className="adsItemContentHeader">UTC2</div>
                <span className="adsItemContentDonors">timviecnhanh.com</span>
              </div>
            </a>
          </li>
          <li className="adsItem">
            <a rel="noreferrer" target="_blank" href="https://timviecnhanh.com/">
              <img src={UTC2News} alt="" className="adsItemImg" />
              <div className="adsItemContent">
                <div className="adsItemContentHeader">UTC2 News</div>
                <span className="adsItemContentDonors">gearvn.com</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center my-2">
        <h6 className="text-black">Gợi ý cho bạn</h6>
        {!suggestions.loading && (
          <h6 // className="fas fa-redo"
            className="text-black"
            style={{ cursor: 'pointer', marginLeft: '154px' }}
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
            <div
              style={{
                width: '345px',
                boxShadow: '0 0 4px #ddd',
                borderRadius: '15px',
                padding: '10px 20px',
                margin: '15px 0px ',
                background: '#ffffff',
              }}
            >
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
