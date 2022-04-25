import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
      <ul className="navbar-nav flex-row">
        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className="nav-link" to={link.path}>
              <span className="material-icons">{link.icon}</span>
            </Link>
          </li>
        ))}

        <li className="nav-item dropdown" style={{ opacity: 1 }}>
          <span
            className="nav-link position-relative"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></span>

          <img
            src={Add}
            className=" flex-fill "
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
            style={{ width: '30px', cursor: 'pointer', marginTop: '-14px', marginLeft: '10px' }}
          ></img>
        </li>
      </ul>
    </div>
  );
};

export default MenuControl;
