import React from 'react';
import { useSelector } from 'react-redux';

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <div className="postBottomActionItem">
      {isLike ? (
        <i onClick={handleUnLike} className="postBottomActionItemText">
          Thích
        </i>
      ) : (
        <i onClick={handleLike} className="postBottomActionItemText">
          Thích
        </i>
      )}
    </div>
  );
};

export default LikeButton;
