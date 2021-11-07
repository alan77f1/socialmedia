import React, { useState } from 'react';
import Post from '../Post';
import Share from '../Share';

import './Feed.css';

Feed.propTypes = {};

function Feed({ currentUser }) {
    const [posts, setPosts] = useState([]);

    return (
        <div className='feed'>
            <Share currentUser={currentUser} setPosts={setPosts} posts={posts} />
            <Post currentUser={currentUser} />
            <Post currentUser={currentUser} />
            <Post currentUser={currentUser} />
            {posts.map((post) => (
                <Post key={post._id} currentUser={currentUser} post={post} />
            ))}
        </div>
    );
}

export default Feed;
