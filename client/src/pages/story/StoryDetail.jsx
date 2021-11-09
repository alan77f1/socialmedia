import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { NO_AVARTAR, PF } from '../../constants';
import { sortDateUtils } from '../../utils/utils';


StoryDetail.propTypes = {};

function StoryDetail(props) {

    const { storyId } = useParams();

    // get stories and get user from stories

    const changeStoryViewerHandler = (user) => {
        // get story by userId field

        const sViewer = sortDateUtils(
            stories.filter((storyUser) => storyUser[0].userId === user._id)
        );
        setStoryViewer(...sViewer);
        setStoryAuthor(user);
        setShowStoryIndex(0);

        pauseFlagMouse.current = false;
        pauseFlagBtn.current = false;
    };

    const changeStoryIndexHandler = (number) => {
        if (showStoryIndex + number >= storyViewer.length || showStoryIndex + number < 0) {
            console.log('change story view');

            if (lastStory._id === storyViewer[showStoryIndex]._id && number === 1) {
                console.log('rediarect to home');
                window.location.href = 'http://localhost:3000';
            } else {
                const currentIndex = allUser.findIndex((user) => user._id === storyAuthor._id);
                const tempStoryAuthor = allUser[currentIndex + number];
                setStoryAuthor(tempStoryAuthor);

                const sViewer = stories.filter(
                    (storyUser) => storyUser[0].userId === allUser[currentIndex + number]._id
                );

                setStoryViewer(...sViewer);
                setShowStoryIndex(0);
            }
        } else {
            setShowStoryIndex(showStoryIndex + number);
        }
    };

    // console.log('render');
    return (
        <div className="stories">
            <div className="left">
                <div className="storyLeftTop">
                    <div className="storyLeftTopTitle">Tin</div>
                </div>
                <div className="storySubTitle">Tin của bạn</div>
                {myStories ? (
                    <div
                        className={
                            storyAuthor._id === currentUser._id ? 'storyUser active' : 'storyUser'
                        }
                        onClick={() => changeStoryViewerHandler(currentUser)}
                    >
                        <div className="storyUserInfo">
                            <img
                                src={`${PF}/${
                                    currentUser.avatar ? `person/${currentUser.avatar}` : NO_AVARTAR
                                }`}
                                alt=""
                                className="storyUserInfoAvatar"
                            />
                            <div className="storyUserInfoText">
                                <div className="storyUserInfoTextUsername">{`${currentUser.firstName} ${currentUser.lastName}`}</div>
                                <div className="storyUserInfoTextTime">7 phút</div>
                            </div>
                        </div>
                        <Link to="/stories/create" className="storyUserBtnLink">
                            <div className="storyUserBtn">+</div>
                        </Link>
                    </div>
                ) : (
                    <Link to="/stories/create" className="storyUserBtnLink">
                        <div className="addStory">
                            <div className="storyUserBtn">+</div>
                            <div className="addStoryText">
                                <div className="addStoryTextTitle">Tạo tin</div>
                                <div className="addStoryTextDesc">
                                    Bạn có thể chia sẻ ảnh hoặc viết gì đó
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
        </div>
    );
}

export default StoryDetail;
