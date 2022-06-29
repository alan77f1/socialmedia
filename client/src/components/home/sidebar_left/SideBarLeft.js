import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UTC2Ads from '../../../assets/images/utc2ads.jpg';
import UTC2News from '../../../assets/images/utc2media.jpg';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import UserInfo from './UserInfo';

const SideBarLeft = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  return (
    <div className="sidebar">
      <ul classFName="sidebar_list">
        <li className="sidebar_item" style={{ marginTop: '10px' }}>
          <UserInfo user={auth.user} />
        </li>
        <li className="sidebar_item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <div className="sidebar_item_text">
            <i className="fas fa-plus-circle sidebar_item_icon" />
            <span> Thêm bài viết</span>
          </div>
        </li>

        <Link to="/message" className="sidebar_item_link" style={{ textDecoration: 'none' }}>
          <li className="sidebar_item">
            <div className="sidebar_item_text">
              <i className="fab fa-facebook-messenger sidebar_item_icon" />
              <span>Tin nhắn</span>
            </div>
          </li>
        </Link>
      </ul>

      <div className="sidebar_ads">
        <div className="sidebar_ads_title">Được tài trợ</div>
        <ul className="sidebar_ads_list">
          <li className="sidebar_ads_item">
            <a rel="noreferrer" target="_blank" href="https://utc2.edu.vn/">
              <img src={UTC2Ads} alt="" className="sidebar_ads_item-img" />
              <div className="sidebar_ads_item-content">
                <div className="sidebar_ads_item-header">UTC2</div>
              </div>
            </a>
          </li>
          <li className="sidebar_ads_item">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/utc2news">
              <img src={UTC2News} alt="" className="sidebar_ads_item-img" />
              <div className="sidebar_ads_item-content">
                <div className="sidebar_ads_item-header">UTC2 Media</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar_Policies">
        <div style={{ opacity: 1 }} className="my-2">
          <a
            href="https://www.facebook.com/profile.php?id=100033670082606"
            target="_blank"
            rel="noreferrer"
            style={{ wordBreak: 'break-all', color: 'black' }}
          >
            Liên hệ với chúng tôi
          </a>
          <small className="d-block">Chào mừng dến với UTC2 Media</small>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
