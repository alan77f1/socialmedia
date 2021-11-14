import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { format } from 'timeago.js';
import { NO_AVARTAR, PF, TYPE_REPLY } from '../../constants';
import './Comment.css';


CommentItem.propTypes = {};

function CommentItem({ comment }) {
  return (
    <>
      <div className='commentItemAvatar'>
        <img
          src={`${PF}/${
            comment.userAvatar ? `person/${comment.userAvatar}` : NO_AVARTAR
          }`}
          alt=''
          className='commentItemAvatarImg'
        />
      </div>
      <div className='commentItemContentWrap'>
        <div className='commentItemContent'>
          <div className='commentItemContentLeft'>
            <div className='commentItemContentName'>{comment.fullName}</div>
            <div className='commentItemContentText'>{comment.text}</div>
            {likeViewer.length > 0 && (
              <ul
                className={
                  comment.text.length <= 35
                    ? 'commentItemContentReportAction shortComment'
                    : 'commentItemContentReportAction'
                }
              >
                {likeViewer.map((element, index) => (
                  <li key={index} className='reportItem'>
                    <img src={`./assets/feed/${element[0]}.svg`} alt='' />
                  </li>
                ))}
                <div className='reportItemQuantity'>{likes.length}</div>
                <ul className='reportItemDetail'>
                  <li className='reportItemDetailItem'>
                    <img src='./assets/feed/like.svg' alt='' />
                    <div className='reportItemDetailItemQuantity'>53</div>
                  </li>
                  <li className='reportItemDetailItem'>
                    <img src='./assets/feed/haha.svg' alt='' />
                    <div className='reportItemDetailItemQuantity'>32</div>
                  </li>
                  <li className='reportItemDetailItem'>
                    <img src='./assets/feed/angry.svg' alt='' />
                    <div className='reportItemDetailItemQuantity'>32</div>
                  </li>
                </ul>
              </ul>
            )}
          </div>
          <div className='commentItemContentRight'>
            <MoreHorizIcon />
          </div>
        </div>
        <div className='commentItemBottom'>
          <div className='commentItemContentAction'>
            <div>
              {/* Like comment list btn */}
              <ul>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/like.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/haha.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/lovely.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/heart.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/wow.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/sad.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
                <li className='commentLikeBtnItem'>
                  <img
                    src='./assets/feed/angry.svg'
                    alt=''
                    className='commentLikeBtnItemImg'
                  />
                </li>
              </ul>
            </div>
            <div className='commentItemContentActionItem'>Phản hồi</div>
            <div className='commentItemContentTime'>
              {format(comment.createdAt)}
            </div>
          </div>

          <div className='subcommentReadMore'>
            <div
              className='subcommentReadMoreBg'
              style={{
                backgroundImage: `url("/assets/feed/infoImg.png")`,
                backgroundPosition: '0 -540px',
              }}
            ></div>
            <div
              className='subcommentReadMoreText'
            >
              {subCommentCount} phản hồi
            </div>
          </div>

         
              {/* <input type="text" ref={autoFocusRef}></input> */}
             
            </div>
        
        </div>
      </div>
    </>
  );
}

export default CommentItem;
