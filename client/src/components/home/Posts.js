import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './create_post/PostCard';
import LoadIcon from '../../assets/images/loading.gif';
import { POST_TYPES } from '../../redux/actions/postAction';
import { getDataAPI } from '../../utils/fetchData';
import LoadMoreBtn from '../button/LoadMoreBtn';

const Posts = () => {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(`posts?limit=${homePosts.page * 9}`, auth.token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });

    setLoad(false);
  };

  return (
    <div className="posts">
      {homePosts.posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}

      {load && <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />}

      <LoadMoreBtn result={homePosts.result} page={homePosts.page} load={load} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default Posts;
