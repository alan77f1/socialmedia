import React from 'react';
import { Link } from 'react-router-dom';
import MenuRight from './MenuRight';
import MenuControl from './MenuControl';
import UTC2 from '../../assets/images/uct2.png';
import Search from './Search';

const Header = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light 
           justify-content-between align-middle"
      >
        <div className="headerLeft">
          <Link to="/" className="logo">
            <img src={UTC2} alt="" style={{ width: '40px', marginRight: '2px' }} />
          </Link>
          <p
            style={{
              margin: '1px 12px 1px 1px',
              fontSize: '17px',
              width: '100px',
              height: '100%',
              color: '#002F77',
              fontWeight: '650',
            }}
          >
            UTC2 News
          </p>
          <Search />
        </div>

        <MenuControl />
        <MenuRight />
      </nav>
    </div>
  );
};
export default Header;
