import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const MenuControl = () => {
  const navLinksHome = [{ label: 'Home', icon: 'home', path: '/' }];

  const navLinksMessage = [{ label: 'discover', icon: 'explore', path: '/discover' }];
  const dispatch = useDispatch();

  return (
    <div className="menu menu-middle">
      <ul className="header-menu-middle">
        {navLinksHome.map((link, index) => (
          <li className="menu-middle-item " key={index}>
            <Link to={link.path}>
              <span className="material-icons" style={{ fontSize: 'inherit', color: '#002f77' }}>
                {link.icon}
              </span>
            </Link>
          </li>
        ))}
        <li className="menu-middle-item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <AddCircleIcon style={{ fontSize: 'inherit', color: '#002f77' }} />
        </li>

        {navLinksMessage.map((link, index) => (
          <li className="menu-middle-item " key={index}>
            <Link to={link.path}>
              <span className="material-icons" style={{ fontSize: 'inherit', color: '#002f77' }}>
                {link.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuControl;
