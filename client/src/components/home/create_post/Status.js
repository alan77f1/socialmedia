import React from 'react';
import Avatar from '../../profile/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';

const Status = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <form className="share" onSubmit="">
      <div className="shareTop">
        <img src="" className="shareTopImg" />
        <input type="text" placeholder=" ơi, bạn đang nghĩ gì thế?" className="shareTopInput" value="" onChange="" />
      </div>

      <div className="shareBottom">
        <div className="shareBottomAction">
          <div
            className="shareBottomActionItemBg"
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 0',
            }}
          ></div>
          <span className="shareBottomActionItemText">Video trực tiếp</span>
        </div>
        <label htmlFor="file" className="shareBottomAction">
          <div
            className="shareBottomActionItemBg"
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 -275px',
            }}
          ></div>
          <span className="shareBottomActionItemText">Ảnh/Video</span>
        </label>
        <input style={{ display: 'none' }} type="file" id="file" accept=".png, .jpeg, .jpg" multiple />
        <div className="shareBottomAction">
          <div
            className="shareBottomActionItemBg"
            style={{
              backgroundImage: `url("/assets/feed/imgAction.png")`,
              backgroundPosition: '0 -50px',
            }}
          ></div>
          <span className="shareBottomActionItemText">Cảm xúc/Hoạt động</span>
        </div>
      </div>
    </form>

    // <div className="status my-3 d-flex">
    //   <Avatar src={auth.user.avatar} size="big-avatar" />

    //   <button className="statusBtn flex-fill" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
    //     {auth.user.username} ơi, bạn cần ghi chú gì không?
    //   </button>
    // </div>
  );
};

export default Status;
