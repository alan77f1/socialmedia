import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const MenuControl = () => {
  const navLinks = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Discover', icon: 'explore', path: '/discover' },
  ];

  const dispatch = useDispatch();

  return (
    <div className="menu menu-middle">
      <ul className="header-menu-middle">
        <li className="menu-middle-item" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
          <AddCircleIcon style={{ fontSize: 'inherit', color: '#002f77' }} />
        </li>
        {navLinks.map((link, index) => (
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
