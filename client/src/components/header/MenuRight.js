import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import Avatar from '../Avatar';
import NotifyModal from '../NotifyModal';
import ChangePassword from '../profile/changePassword';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Search from './Search';

const MenuRight = () => {
  const [showDialogPassword, setShowDialogPassword] = useState(false);
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="menu menu-right">
      <ul className="navbar-nav flex-row">
        <li>
          <Search />
        </li>
        {/* <li className="menu-middle-item_bell">
          <NotificationsIcon style={{ fontSize: 'inherit', color: '#002f77', marginRight: '5px' }} />

          <span role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="notify_length">{notify.data.length}</span>
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ transform: 'translateX(60px)' }}>
            <NotifyModal />
          </div>
        </li> */}

        <li className="nav-item dropdown" style={{ opacity: 1 }}>
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>

          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Trang cá nhân
            </Link>

            <label
              className="dropdown-item"
              onClick={() => {
                setShowDialogPassword(true);
              }}
            >
              Đổi mật khẩu
            </label>

            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>
              Đăng xuất
            </Link>
          </div>
        </li>
      </ul>
      {showDialogPassword && <ChangePassword setShowDialogPassword={setShowDialogPassword} />}
    </div>
  );
};

export default MenuRight;
