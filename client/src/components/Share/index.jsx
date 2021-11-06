import axios from 'axios';
import { NO_AVARTAR, PF } from '../../constants';

Share.propTypes = {};

function Share({ currentUser, posts, setPosts }) {
    const handleShareSubmmit = async (e) => {
        e.preventDefault();

        const imgCollections = [];

        const newPost = {
            userId: currentUser._id,
            imgCollections: imgCollections,
        };

        const res = await axios.post('./posts', newPost);
    };

    return (
        <form className='share' onSubmit={handleShareSubmmit}>
            <div className='shareTop'>
                <img
                    src={`${PF}/${
                        currentUser.avatar ? `person/${currentUser.avatar}` : NO_AVARTAR
                    }`}
                    alt=''
                    className='shareTopImg'
                />
                <input
                    type='text'
                    placeholder={`${currentUser.lastName} ơi, bạn đang nghĩ gì thế?`}
                    className='shareTopInput'
                />
            </div>
        </form>
    );
}

export default Share;
