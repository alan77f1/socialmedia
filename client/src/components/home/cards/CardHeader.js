import React, { useState, useEffect } from 'react';
import Avatar from '../../Avatar';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePost, unSavePost } from '../../../redux/actions/postAction';
import moment from 'moment';
import 'moment/locale/vi';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import { deletePost } from '../../../redux/actions/postAction';
import { BASE_URL } from '../../../utils/config';
const CardHeader = ({ post }) => {
  const { auth, socket } = useSelector((state) => state);
  const [saved, setSaved] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleEditPost = () => {
    dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } });
  };
  const handleDeletePost = () => {
    if (window.confirm('Bạn muốn xoá bài viết này?')) {
      dispatch(deletePost({ post, auth, socket }));
      return history.push('/');
    }
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`);
  };

  const handleSavePost = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    await dispatch(savePost({ post, auth }));
    setSaveLoad(false);
  };

  const handleUnSavePost = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    await dispatch(unSavePost({ post, auth }));
    setSaveLoad(false);
  };

  // Saved
  useEffect(() => {
    if (auth.user.saved.find((id) => id === post._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [auth.user.saved, post._id]);

  return (
    <div className="card_header">
      <div className="d-flex">
        <Avatar src={post.user.avatar} size="big-avatar" />
        <div className="card_name">
          <h6 className="m-0">
            <Link to={`/profile/${post.user._id}`} className="text-dark">
              @{post.user.username}
            </Link>
          </h6>
          <small className="text-muted">{moment(post.createdAt).fromNow()}</small>
        </div>
      </div>

      <div className="nav-item dropdown">
        <span className="material-icons" id="moreLink" data-toggle="dropdown">
          more_horiz
        </span>
        <div className="dropdown-menu" style={{ borderRadius: '12px' }}>
          {saved ? (
            <div className="dropdown-item " onClick={handleUnSavePost}>
              <span className="material-icons">bookmarks</span> Bỏ lưu
            </div>
          ) : (
            <div className="dropdown-item" onClick={handleSavePost}>
              <span className="material-icons">bookmarks</span> Lưu bài viết
            </div>
          )}

          {auth.user._id === post.user._id && (
            <>
              <div className="dropdown-item" onClick={handleEditPost}>
                <span className="material-icons">create</span> Chỉnh sửa
              </div>
              <div className="dropdown-item" onClick={handleDeletePost}>
                <span className="material-icons">delete_outline</span> Xoá bài viết
              </div>
            </>
          )}
          <div className="dropdown-item" onClick={handleCopyLink}>
            <span className="material-icons">content_copy</span> Sao chép
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHeader;
