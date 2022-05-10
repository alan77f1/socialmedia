import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../redux/actions/postAction';
import LoadIcon from '../../assets/images/loading.gif';
import PostCard from '../../components/home/post_card/PostCard';
import RightSideBar from '../../components/home/RightSideBar';
import SideBar from '../../components/home/side_bar_left/SideBar';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const { auth, detailPost } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ detailPost, id, auth }));

    if (detailPost.length > 0) {
      const newArr = detailPost.filter((post) => post._id === id);
      setPost(newArr);
    }
  }, [detailPost, dispatch, id, auth]);

  return (
    <div>
      <div className="posts homePage">
        <div className="cLeft">
          <SideBar />
        </div>
        <div className="cMiddle">
          {post.length === 0 && <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />}

          {post.map((item) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
        <div className="cRight">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Post;
