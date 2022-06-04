import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UTC2Ads from '../../../assets/images/utc2ads.jpg';
import UTC2News from '../../../assets/images/utc2media.jpg';
import ImgPosts from '../../../assets/sidebar/posts.png';
import ImgDiscover from '../../../assets/sidebar/discover.png';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';

const SideBarLeft = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  return (
    <div className="sidebar">
      <ul classFName="sidebar-List">
        <Link to="/discover">
          <li className="sidebar-Item" style={{ marginTop: '10px' }}>
            <img src={ImgDiscover} alt="" className="sidebar-ItemBadge" />
            <div className="sidebar-ItemText">
              <span className="sidebar-ItemName">Trang chủ</span>
            </div>
          </li>
        </Link>
        <li className="sidebar-Item">
          <UserInfo user={auth.user} />
        </li>
        <li className="sidebar-Item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <img src={ImgPosts} alt="" className="sidebar-ItemBadge" />
          <div className="sidebar-ItemText">
            <span className="sidebar-ItemName">Thêm bài viết</span>
          </div>
        </li>

        <Link to="/discover" className="sidebar-Itemlink">
          <li className="sidebar-Item">
            <img src={ImgDiscover} alt="" className="sidebar-ItemBadge" />
            <div className="sidebar-ItemText">
              <span className="sidebar-ItemName">Khám phá</span>
            </div>
          </li>
        </Link>

        <Link to="/discover" className="sidebar-Itemlink">
          <li className="sidebar-Item">
            <img src={ImgDiscover} alt="" className="sidebar-ItemBadge" />
            <div className="sidebar-ItemText">
              <span className="sidebar-ItemName">Thông báo</span>
            </div>
          </li>
        </Link>
        <Link to="/discover" className="sidebar-Itemlink">
          <li className="sidebar-Item">
            <img src={ImgDiscover} alt="" className="sidebar-ItemBadge" />
            <div className="sidebar-ItemText">
              <span className="sidebar-ItemName">Đổi mật khẩu</span>
            </div>
          </li>
        </Link>

        <Link to="/discover" className="sidebar-Itemlink">
          <li className="sidebar-Item">
            <img src={ImgDiscover} alt="" className="sidebar-ItemBadge" />
            <div className="sidebar-ItemText">
              <span className="sidebar-ItemName">Đăng xuất</span>
            </div>
          </li>
        </Link>
      </ul>
      {/* <div className="ads">
        <div className="adsTitle">Được tài trợ</div>
        <ul className="adsList">
          <li className="adsItem">
            <a rel="noreferrer" target="_blank" href="https://utc2.edu.vn/">
              <img src={UTC2Ads} alt="" className="adsItemImg" />
              <div className="adsItemContent">
                <div className="adsItemContentHeader">UTC2</div>
              </div>
            </a>
          </li>
          <li className="adsItem">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/utc2news">
              <img src={UTC2News} alt="" className="adsItemImg" />
              <div className="adsItemContent">
                <div className="adsItemContentHeader">UTC2 News</div>
              </div>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="sidebar-Policies">
        <div style={{ opacity: 1 }} className="my-2">
          <a
            href="https://www.facebook.com/profile.php?id=100033670082606"
            target="_blank"
            rel="noreferrer"
            style={{ wordBreak: 'break-all', color: 'black' }}
          >
            Liên hệ với chúng tôi
          </a>
          <small className="d-block">Chào mừng dến với UTC2 News</small>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
