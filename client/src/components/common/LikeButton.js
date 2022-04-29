import React from 'react';
import { useSelector } from 'react-redux';

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <div className="postBottomActionItem">
      {isLike ? (
        <span onClick={handleUnLike} className="postBottomActionItemText">
          Thích
        </span>
      ) : (
        <span onClick={handleLike} className="postBottomActionItemText">
          Thích
        </span>
      )}
    </div>
  );
};

export default LikeButton;
