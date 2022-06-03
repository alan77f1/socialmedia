import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const PostThumb = ({ posts, result }) => {
  const [readMore, setReadMore] = useState(false);
  if (result === 0)
    return (
      <h4 className="text-center" style={{ padding: '10px' }}>
        Chưa có bài viết nào
      </h4>
    );

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

            <div className="post_thumb_menu ">
              <span>
                {post.content.length < 60
                  ? post.content
                  : readMore
                  ? post.content + ' '
                  : post.content.slice(0, 60) + '... '}
              </span>
              {post.content.length > 60 && (
                <span className="readMore" onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'Ẩn' : 'Xem thêm'}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostThumb;
