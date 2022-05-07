import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Friend from '../../assets/sidebar/friend.png';
import Saved from '../../assets/sidebar/saved.png';
import Posts from '../../assets/sidebar/posts.png';
import Discover from '../../assets/sidebar/discover.png';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

import LoadIcon from '../../assets/images/loading.gif';
import { getProfileUsers } from '../../redux/actions/profileAction';
import { useParams } from 'react-router-dom';

SideBar.propTypes = {};

function SideBar() {
  const navLinks = [{ label: 'Discover', icon: 'explore', path: '/discover' }];

  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);

  return (
    <div className="sideBar">
      <ul className="sideBarList">
        <li className="sideBarItem">
          <UserInfo user={auth.user} />
        </li>
        <li className="sideBarItem">
          <img src={Friend} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Bạn bè</span>
          </div>
        </li>
        <li className="sideBarItem">
          <img src={Posts} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName" onClick={() => setSaveTab(false)}>
              Bài viết
            </span>
          </div>
        </li>

        {navLinks.map((link, index) => (
          <li className="sideBarItem " key={index}>
            <Link to={link.path} className="sideBarItemlink">
              <img src={Discover} alt="" className="sideBarItemBadge" />
              <div className="sideBarItemText">
                <span className="sideBarItemName">Khám phá</span>
              </div>
            </Link>
          </li>
        ))}

        <li className="sideBarItem">
          <img src={Saved} alt="" className="sideBarItemBadge" />
          <div className="sideBarItemText">
            <span className="sideBarItemName">Đã lưu</span>
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
            <span className="shortcutsName">Tân</span>
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

        {profile.loading ? (
          <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
        ) : (
          <>
            {saveTab ? (
              <Saved auth={auth} dispatch={dispatch} />
            ) : (
              <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;
