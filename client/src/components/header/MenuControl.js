import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

import Add from '../../assets/images/add.png';

const MenuControl = () => {
  const navLinks = [{ label: 'Home', icon: 'home', path: '/' }];

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return 'active';
  };

  return (
    <div className="menu menu-middle">
      <ul className="header-menu-middle">
        {navLinks.map((link, index) => (
          <li className="menu-middle-item ">
            <Link to={link.path}>
              <HomeIcon style={{ fontSize: 'inherit', color: '#002f77' }} />
            </Link>
          </li>
        ))}

        <li
          className="menu-middle-item"
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
        >
          <AddCircleIcon style={{ fontSize: 'inherit', color: '#002f77' }} />
        </li>
        <li className="menu-middle-item">
          <GroupIcon style={{ fontSize: 'inherit', color: '#002f77' }} />
          <span className="menu-middle-item_badge">3</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuControl;
