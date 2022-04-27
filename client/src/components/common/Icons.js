import React from 'react';
import { EMOJI_ICON } from '../../constants/index';
import icon from '../../assets/images/iconkaka.png';
const Icons = ({ setContent, content }) => {
  return (
    <div className="nav-item dropdown" style={{ opacity: 1 }}>
      <span
        className="nav-link position-relative px-1"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span style={{ opacity: 1 }}>
          <img src={icon} style={{ width: '35px' }}></img>
        </span>
      </span>

      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="reactions">
          {EMOJI_ICON.map((icon) => (
            <span key={icon} onClick={() => setContent(content + icon)}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
