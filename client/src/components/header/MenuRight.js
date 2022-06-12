import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/authAction';
import Avatar from '../Avatar';

import ChangePassword from '../profile/changePassword';

import Search from './Search';

const MenuRight = () => {
  const [showDialogPassword, setShowDialogPassword] = useState(false);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="menu menu-right">
      <ul className="navbar-nav flex-row">
        <li>
          <Search />
        </li>

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

          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ border: 'none' }}>
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
