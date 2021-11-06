import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PublicIcon from '@material-ui/icons/Public';
import { format } from 'timeago.js';
import './Post.css';

Post.propTypes = {};

function Post({ post, currentUser }) {
  return (
    <div className='post'>
      <div className='postTop'>
        <img src='' alt='' className='postTopAvatar' />
        <div className='postTopInfo'>
          <span className='postTopInfoName'>post</span>
          <div className='postTopInfoTime'>
            <span>{format(post.createdAt)} · </span> <PublicIcon style={{ fontSize: 'inherit' }} />
          </div>
        </div>
        <div className='postTopAction'>
          <MoreHorizIcon />
        </div>
      </div>

      <div className='postCommentWrap'>
        <hr className='postHr' />
        Comment
      </div>
    </div>
  );
}

export default Post;
