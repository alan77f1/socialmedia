import React, { useEffect } from 'react';

import Posts from '../components/home/Posts';
import RightSideBar from '../components/home/RightSideBar';
import SideBar from '../components/home/sidebar_left/SideBarLeft';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet';
import LoadData from '../components/alert/LoadData';

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
    <Helmet title="Trang chủ">
      <div className="homePage ">
        <div className="cLeft">
          <SideBar />
        </div>
        <div className="cMiddle">
          {homePosts.loading ? (
            <LoadData />
          ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
            <h4 className="text-center text-danger" style={{ padding: '10px' }}>
              Chưa có bài viết nào
            </h4>
          ) : (
            <Posts />
          )}
        </div>
        <div className="cRight">
          <RightSideBar />
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
