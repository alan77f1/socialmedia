import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost, unLikePost } from '../../../redux/actions/postAction';
import LikeButton from '../../button/LikeBtn';

const CardFooter = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Likes
  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(likePost({ post, auth, socket }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(unLikePost({ post, auth, socket }));
    setLoadLike(false);
  };

  // Saved
  useEffect(() => {}, [post._id]);

  return (
    <div className="card_footer">
      <div className="d-flex justify-content-between " style={{ borderBottom: '0.5px solid rgb(216,216,216)' }}>
        <h6 className="card_show_like">
          <i className="fa fa-heart card_show_like-icon"></i>
          {post.likes.length}
        </h6>

        <h6 className="card_show_comments">{post.comments.length} bình luận</h6>
      </div>
      <div className="card_icon_menu">
        <LikeButton isLike={isLike} handleLike={handleLike} handleUnLike={handleUnLike} />

        <div className="post_bottom_action_item">
          <Link to={`/post/${post._id}`} className="post_bottom_action_item-text text-dark">
            Bình luận
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
