import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadIcon from '../assets/images/loading.gif';
import Helmet from '../components/Helmet';
import Posts from '../components/home/Posts';
import RightSideBar from '../components/home/RightSideBar';
import SideBar from '../components/home/sidebar_left/SideBarLeft';

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
      <div className="home_page ">
        <div className="home_page_left">
          <SideBar />
        </div>
        <div className="home_page_middle">
          {homePosts.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
          ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
            <h4 className="text-center text-danger" style={{ padding: '10px' }}>
              Chưa có bài viết nào
            </h4>
          ) : (
            <Posts />
          )}
        </div>
        <div className="home_page_right">
          <RightSideBar />
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
