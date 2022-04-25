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
        <Link to="/" className="logo">
          <img src={UTC2} alt="" style={{ width: '35px', marginRight: '5px' }} />
          <h4
            className="navbar-brand p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
            // style={{ marginTop: '10px' }}
          >
            UTC2
          </h4>
        </Link>
        <Search />
        <MenuControl />
        <MenuRight />
      </nav>
    </div>
  );
};
export default Header;
