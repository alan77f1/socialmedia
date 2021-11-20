import './OnlineFriend.css';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NO_AVARTAR, PF } from '../../constants';

OnlineFriend.propTypes = {};

function OnlineFriend({ friends }) {
  return (
    <div className='onlineFriend'>
      <div className='onlineFriendTop'>
        <div className='onlineFriendTopTitle'>Người liên hệ</div>
        <div className='onlineFriendTopAction'>
          <div className='onlineFriendTopActionItem'>
            <VideoCallIcon />
          </div>
          <div className='onlineFriendTopActionItem'>
            <SearchIcon />
          </div>
          <div className='onlineFriendTopActionItem'>
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <ul className='onlineFriendList'>
        {friends.map((friend) => (
          <li key={friend._id} className='onlineFirendItem'>
            <div className='onlineFriendItemAvatarWrap'>
              <img src='' alt='' className='onlineFriendItemAvatar' />
              <div className='onlineFriendItemBadge'></div>
            </div>
            <span className='onlineFriendItemName'>firstName</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineFriend;
