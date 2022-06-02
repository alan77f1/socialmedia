import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImgFriend from '../../../assets/sidebar/friend.png';
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
        <li className="sidebar-Item">
          <UserInfo user={auth.user} />
        </li>
        <li className="sidebar-Item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <img src={ImgPosts} alt="" className="sidebar-ItemBadge" />
          <div className="sidebar-ItemText">
            <span className="sidebar-ItemName">Thêm bài đăng</span>
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
      </ul>
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
