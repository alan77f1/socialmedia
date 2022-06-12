
const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <div className="post_bottom_action_item">
      {isLike ? (
        <span onClick={handleUnLike} className="post_bottom_action_item-Text" style={{ color: '#002F77' }}>
          Thích
        </span>
      ) : (
        <span onClick={handleLike} className="post_bottom_action_item-Text" style={{ color: 'black' }}>
          Thích
        </span>
      )}
    </div>
  );
};

export default LikeButton;
