import { NO_AVARTAR, PF } from '../../constants';
import './Share.css';

Share.propTypes = {};

function Share({ currentUser, posts, setPosts }) {
  const handleShareSubmmit = async (e) => {
    e.preventDefault();

    const imgCollections = [];
  };

  return (
    <form className='share' onSubmit={handleShareSubmmit}>
      <div className='shareTop'>
        <img
          src={`${PF}/${
            currentUser.avatar ? `person/${currentUser.avatar}` : NO_AVARTAR
          }`}
          alt=''
          className='shareTopImg'
        />
        <input
          type='text'
          placeholder={`${currentUser.lastName} ơi, bạn đang nghĩ gì thế?`}
          className='shareTopInput'
        />
      </div>

      <div className='shareBottom'>
        <div className='shareBottomAction'>
          <div
            className='shareBottomActionItemBg'
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 0',
            }}
          ></div>
          <span className='shareBottomActionItemText'>Video trực tiếp</span>
        </div>
        <label htmlFor='file' className='shareBottomAction'>
          <div
            className='shareBottomActionItemBg'
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 -275px',
            }}
          ></div>
          <span className='shareBottomActionItemText'>Ảnh/Video</span>
        </label>
        <input
          style={{ display: 'none' }}
          type='file'
          id='file'
          accept='.png, .jpeg, .jpg'
          multiple
        />
        <div className='shareBottomAction'>
          <div
            className='shareBottomActionItemBg'
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 -50px',
            }}
          ></div>
          <span className='shareBottomActionItemText'>Cảm xúc/Hoạt động</span>
        </div>
      </div>
    </form>
  );
}

export default Share;
