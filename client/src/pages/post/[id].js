import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../redux/actions/postAction';
import LoadIcon from '../../assets/images/loading.gif';
import PostCard from '../../components/home/create_post/PostCard';
import RightSideBar from '../../components/home/RightSideBar';
import SideBar from '../../components/home/sidebar_left/SideBarLeft';
import Helmet from '../../components/Helmet';
import LoadData from '../../components/alert/LoadData';

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
    <Helmet title="Bài viết">
      <div className="posts homePage">
        <div className="cLeft">
          <SideBar />
        </div>
        <div className="cMiddle">
          {post.length === 0 && <LoadData />}

          {post.map((item) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
        <div className="cRight">
          <RightSideBar />
        </div>
      </div>
    </Helmet>
  );
};

export default Post;
