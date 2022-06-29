import { Link } from 'react-router-dom';
import UTC2 from '../../assets/images/uct2.png';
import MenuControl from './MenuControl';
import MenuRight from './MenuRight';

const Header = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light 
           justify-content-between align-middle"
      >
        <div className="headerLeft">
          <Link to="/" className="logo">
            <img src={UTC2} alt="" />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p className="header-title"> UTC2 Media</p>
          </Link>
        </div>

        <MenuControl />
        <MenuRight />
      </nav>
    </div>
  );
};
export default Header;
