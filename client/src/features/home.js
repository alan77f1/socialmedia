import React, { useEffect } from 'react';

import Posts from '../components/home/Posts';
import RightSideBar from '../components/home/RightSideBar';
import SideBar from '../components/home/side_bar_left/SideBarLeft';
import { useSelector } from 'react-redux';
import LoadIcon from '../assets/images/loading.gif';

let scroll = 0;

const Home = () => {
  const { homePosts } = useSelector((state) => state);

  window.addEventListener('scroll', () => {
    if (window.location.pathname === '/') {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <div>
      <div className="homePage ">
        <div className="cLeft">
          <SideBar />
        </div>
        <div className="cMiddle">
          {homePosts.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
          ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
            <h3 className="text-center">
              Khi bạn theo dõi ai đó, bạn sẽ thấy các bài viết của họ ở Dòng thời gian của bạn. Bạn cũng sẽ nhận được
              nhiều đề xuất thích hợp hơn.
            </h3>
          ) : (
            <Posts />
          )}
        </div>
        <div className="cRight">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
