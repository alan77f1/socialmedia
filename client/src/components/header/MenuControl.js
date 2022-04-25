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
    <div className="menu menu-control">
      <ul className="headerLeftMiddle">
        {navLinks.map((link, index) => (
          <li className="headerLeftMiddleItem headerLeftMiddleItemActive">
            <Link to={link.path}>
              <HomeIcon style={{ fontSize: 'inherit' }} />
            </Link>
          </li>
        ))}

        <li
          className="headerLeftMiddleItem"
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
        >
          <AddCircleIcon style={{ fontSize: 'inherit' }} />
        </li>
        <li className="headerLeftMiddleItem">
          <GroupIcon style={{ fontSize: 'inherit' }} />
          <span className="headerLeftMiddleItemBadge">3</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuControl;
