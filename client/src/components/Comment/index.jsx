import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { NO_AVARTAR, PF } from '../../constants';
import { AuthContext } from '../../context/AuthProvider';

Comment.propTypes = {};

function Comment({ post, totalComment, setTotalComment }) {
  const { user: currentUser } = useContext(AuthContext);
  const [comments, setComments] = useState([]); //comment of a post

  const viewInputRef = useRef();
  const autoFocusRef = useRef();
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/comments/${post._id}/${skip}`);
      // Dang loi, ko dung body dc
      const count = await axios.get(`/comments/count?postId=${post._id}`, {
        postId: post._id,
      });
      setComments((prev) => [...prev, ...res.data]);
      setTotalComment(count.data);
    })();
  }, [post._id, skip]);

  const scrollToCommentHandler = () => {
    viewInputRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    autoFocusRef.current.focus({ preventScroll: true });
  };

  const readMoreHandler = async () => {
    setSkip(skip + 3);
  };

  return (
    <div className='comment'>
      <div className='commentTop' ref={viewInputRef}>
        <img
          src={`${PF}/${
            currentUser.avatar ? `person/${currentUser.avatar}` : NO_AVARTAR
          }`}
          alt=''
          className='commentTopAvatar'
        />
      </div>
      <ul className='commentList'>
        {comments.map((comment) => (
          <li key={comment._id} className='commentItem'></li>
        ))}
      </ul>
      <div className='commentMore' onClick={scrollToCommentHandler}>
        Viết bình luận ...
      </div>
      {totalComment - comments.length > 0 && (
        <div className='commentMore' onClick={readMoreHandler}>
          Xem thêm {`(${totalComment - comments.length})`} bình luận
        </div>
      )}
    </div>
  );
}

export default Comment;
