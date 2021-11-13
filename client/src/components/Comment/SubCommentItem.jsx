import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NO_AVARTAR, PF } from '../../constants';

SubCommentItem.propTypes = {};

function SubCommentItem({ subComment }) {
  return (
    <>
      <div className='commentItemAvatar'>
        <img
          src={`${PF}/${
            subComment.userAvatar
              ? `person/${subComment.userAvatar}`
              : NO_AVARTAR
          }`}
          alt=''
          className='commentItemAvatarImg'
        />
      </div>

      <div className='commentItemContentWrap'>
        <div className='commentItemContent'>
          <div className='commentItemContentLeft'>
            <div className='commentItemContentName'>{subComment.fullName}</div>
            <div className='commentItemContentText'>{subComment.text}</div>
            <div className='reportItemQuantity'></div>
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
            <div className='commentItemContentTime'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCommentItem;
