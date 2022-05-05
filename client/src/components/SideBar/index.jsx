import React from 'react';
import { useSelector } from 'react-redux';
import Friend from '../../assets/sidebar/friend.png';
import UserCard from '../UserCard';
import './SideBar.css';

SideBar.propTypes = {};

function SideBar() {
  const { auth } = useSelector((state) => state);
  return (
    <div className="sideBar">
      <ul className="sideBarList">
        <li className="sideBarItem">
          <UserCard user={auth.user} />
        </li>
        <li className="sideBarItem">
          <img src={Friend} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Bạn bè</span>
            <span className="sideBarItemInfo">3 Bạn mới</span>
          </div>
        </li>
        <li className="sideBarItem">
          <img src="../../assets/sidebar/group.png" alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Khám phá</span>
          </div>
        </li>

        <li className="sideBarItem">
          <img src="../../assets/sidebar/flag.png" alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Trang</span>
          </div>
        </li>
        <li className="sideBarItem">
          <img src="../../assets/sidebar/video.png" alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Watch</span>
            <span className="sideBarItemInfo">7 Video mới</span>
          </div>
        </li>
      </ul>

      <hr className="sideBarHr" />

      <div className="shortcutsTitle">
        <span className="shortcutsTitleText">Lối tắt của bạn</span>
        <div className="shortcutsTitleAction">Chỉnh sửa</div>
      </div>
      <ul className="sideBarList">
        <li className="shortcuts">
          <img src="../../assets/ads/gearvn.jpg" alt="" className="shortcutsImg" />
          <div className="shortcutsText">
            <span className="shortcutsName">Trần Tuấn Dương</span>
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
            <span className="shortcutsName">Trần Tuấn Dương</span>
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
      </ul>
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
}

export default SideBar;
