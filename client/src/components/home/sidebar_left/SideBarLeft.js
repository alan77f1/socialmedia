import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UTC2Ads from '../../../assets/images/utc2ads.jpg';
import UTC2News from '../../../assets/images/utc2media.jpg';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';

const SideBarLeft = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  return (
    <div className="sidebar">
      <ul classFName="sidebar-List">
        <li className="sidebar-Item" style={{ marginTop: '10px' }}>
          <UserInfo user={auth.user} />
        </li>
        <li className="sidebar-Item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <div className="sidebar-ItemText" style={{ display: 'contents', width: '100%', maxWidth: '300px' }}>
            <i class="fas fa-plus-circle" style={{ fontSize: '35px', color: '#002F77' }} />
            <span style={{ fontSize: '17px', color: '#000', marginLeft: '8px' }}> Thêm bài viết</span>
          </div>
        </li>

        <Link to="/message" className="sidebar-Itemlink" style={{ textDecoration: 'none' }}>
          <li className="sidebar-Item">
            <div className="sidebar-ItemText" style={{ display: 'contents', width: '100%', maxWidth: '300px' }}>
              <i className="fab fa-facebook-messenger" style={{ fontSize: '35px', color: '#002F77' }} />
              <span style={{ fontSize: '17px', color: '#000', marginLeft: '8px' }}>Tin nhắn</span>
            </div>
          </li>
        </Link>
      </ul>

      <div className="ads">
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
      </div>
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
