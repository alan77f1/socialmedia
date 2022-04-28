import React from 'react';
import { Link } from 'react-router-dom';
const PostThumb = ({ posts, result }) => {
  if (result === 0) return <h2 className="text-center text-danger">Không Có Bài Đăng</h2>;

  return (
    <div className="post_thumb">
      {posts.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
          <div className="post_thumb_display">
            {post.images[0].url.match(/video/i) ? (
              <video controls src={post.images[0].url} alt={post.images[0].url} />
            ) : (
              <img src={post.images[0].url} />
            )}

            <div className="post_thumb_menu">
              <i className="far fa-heart">{post.likes.length}</i>
              <i className="far fa-comments">{post.comments.length}</i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostThumb;
