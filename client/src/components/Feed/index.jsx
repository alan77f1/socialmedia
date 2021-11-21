import React, { useEffect, useState } from 'react';
import Post from '../Post';
import Share from '../Share';
import axios from 'axios';

import './Feed.css';
import { sortDateUtils } from '../../utils/utils';

Feed.propTypes = {};

function Feed({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/posts/${currentUser._id}`);

      setPosts(sortDateUtils(res.data));
    })();
  }, [currentUser._id]);

  return (
    <div className='feed'>
      <Share currentUser={currentUser} setPosts={setPosts} posts={posts} />
      {posts.map((post) => (
        <Post key={post._id} currentUser={currentUser} post={post} />
      ))}
    </div>
  );
}

export default Feed;
