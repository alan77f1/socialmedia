import React from 'react';
import { useSelector } from 'react-redux';

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <div className="post_bottom_action_item">
      {isLike ? (
        <span onClick={handleUnLike} className="post_bottom_action_item-Text">
          Thích
        </span>
      ) : (
        <span onClick={handleLike} className="post_bottom_action_item-Text">
          Thích
        </span>
      )}
    </div>
  );
};

export default LikeButton;
