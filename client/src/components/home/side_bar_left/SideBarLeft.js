import React from 'react';
import { useSelector } from 'react-redux';
import ImgFriend from '../../../assets/sidebar/friend.png';
import ImgSaved from '../../../assets/sidebar/saved.png';
import ImgPosts from '../../../assets/sidebar/posts.png';
import ImgDiscover from '../../../assets/sidebar/discover.png';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

const SideBarLeft = () => {
  const navLinks = [
    { label: 'Discover', path: '/discover' },
    { label: 'Kaka', path: '/kaka' },
  ];

  const { auth } = useSelector((state) => state);
  return (
    <div className="sideBar">
      <ul className="sideBarList">
        <li className="sideBarItem">
          <UserInfo user={auth.user} />
        </li>
        <li className="sideBarItem">
          <img src={ImgFriend} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Bạn bè</span>
          </div>
        </li>
        <li className="sideBarItem">
          <img src={ImgPosts} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Bài viết</span>
          </div>
        </li>

        {navLinks.map((link, index) => (
          <li className="sideBarItem " key={index}>
            <Link to={link.path} className="sideBarItemlink">
              <img src={ImgDiscover} alt="" className="sideBarItemBadge" />
              <div className="sideBarItemText">
                <span className="sideBarItemName">Khám phá</span>
              </div>
            </Link>
          </li>
        ))}

        <li className="sideBarItem">
          <img src={ImgSaved} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Đã lưu</span>
          </div>
        </li>
      </ul>

      {/* <hr className="sideBarHr" />

      <div className="shortcutsTitle">
        <span className="shortcutsTitleText">Lối tắt của bạn</span>
        <div className="shortcutsTitleAction">Chỉnh sửa</div>
      </div>
      <ul className="sideBarList">
        <li className="shortcuts">
          <img src="../../assets/ads/gearvn.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">Bùi Văn Tân</span>
          </div>
        </li>

        <li className="shortcuts">
          <img src="../../assets/ads/gearvn.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">CANVA - Thiết Kế Dễ Như Chơi</span>
          </div>
        </li>

        <li className="shortcuts">
          <img src="../../assets/ads/gearvn.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">T</span>
          </div>
        </li>
        <li className="shortcuts">
          <img src="../../assets/ads/timviecnhanh.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">Cộng đồng Front-end(HTML/CSS/JS)</span>
          </div>
        </li>
        <li className="shortcuts">
          <img src="../../assets/ads/gearvn.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">CANVA - Thiết Kế Dễ Như Chơi</span>
          </div>
        </li>
      </ul> */}
      <div className="sideBarPolicies">
        <div style={{ opacity: 1 }} className="my-2">
          <a
            href="https://www.facebook.com/profile.php?id=100033670082606"
            target="_blank"
            rel="noreferrer"
            style={{ wordBreak: 'break-all', color: '#002F77' }}
          >
            Liên hệ với chúng tôi
          </a>
          <small className="d-block">Chào mừng dến với UTC2 News</small>

          <small>&copy; 2022 MẠNG XÃ HỘI UTC2 FROM BÙI VĂN TÂN</small>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
