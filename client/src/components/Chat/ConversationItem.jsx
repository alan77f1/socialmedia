import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveIcon from '@mui/icons-material/Remove';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
import { NO_AVARTAR, PF } from '../../constants';
import { AuthContext } from '../../context/AuthProvider';

ConversationItem.propTypes = {
  changeZoomState: PropTypes.func,
  emitSendMessage: PropTypes.func,
};

function ConversationItem({
  conversation,
  index,
  changeZoomState = null,
  setCurrentConversationKey,
  currentConverastionKey,
  arrivalMessage,
  emitSendMessage,
}) {
  const { user: currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [messageSender, setMessageSender] = useState('');
  const [converastionDB, setConverastionDB] = useState();
  useEffect(() => {
    console.log('conversationDB', converastionDB);
    if (
      arrivalMessage &&
      converastionDB?.memberIds.includes(arrivalMessage.senderId)
    ) {
      // setMessages([...messages, arrivalMessage]);
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage, converastionDB]);

  useEffect(() => {
    (async () => {
      const conversationRes = await axios.put('/conversations', {
        senderId: conversation.sender._id,
        receiverId: conversation.receiver._id,
      });

      if (conversationRes.data) {
        const messagesRes = await axios.get(
          `/messages/${conversationRes.data._id}`
        );
        setMessages(messagesRes.data);
        setConverastionDB(conversationRes.data);
      }
    })();
  }, [conversation]);

  const handleChangeZoomState = (conversationKey, flag) => {
    if (changeZoomState) changeZoomState(conversationKey, flag);
  };

  const handlerChatInputChange = (e) => {
    setMessageSender(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const savedMessage = await axios.post('/messages', {
      conversationId: converastionDB._id,
      senderId: currentUser._id,
      text: messageSender,
    });

    const sendMessage = {
      senderId: currentUser._id,
      receiverId: conversation.receiver._id,
      text: messageSender,
    };

    if (emitSendMessage) emitSendMessage('sendMessage', sendMessage);

    setMessageSender('');
    setMessages([...messages, savedMessage.data]);
  };

  return (
    <div
      className={
        currentConverastionKey === conversation.key ? 'chat active' : 'chat'
      }
      style={{ right: `${index * (330 + 12) + 90}px` }}
      onClick={() => setCurrentConversationKey(conversation.key)}
    >
      <div className='chatTop'>
        <div className='chatTopUser'>
          <div className='chatTopUserAvatar'>
            <img
              src={`${PF}/${
                conversation.receiver.avatar
                  ? `person/${conversation.receiver.avatar}`
                  : NO_AVARTAR
              }`}
              alt=''
            />
            <div className='chatTopUserAvatarBadge'></div>
          </div>

          <div className='chatTopUserInfo'>
            <div className='chatTopUserInfoName'>
              {conversation.receiver.firstName} {conversation.receiver.lastName}
            </div>
            <div className='chatTopUserInfoState'>Đang hoạt động</div>
          </div>
        </div>
        <div className='chatTopAction'>
          <div className='chatTopActionItem'>
            <PhoneIcon />
          </div>
          <div
            className='chatTopActionItem'
            onClick={() => handleChangeZoomState(conversation.key, true)}
          >
            <RemoveIcon />
          </div>
          <div className='chatTopActionItem'>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className='chatContent'>
        {messages.map((message, index, array) => {
          const duration =
            new Date(message.createdAt) - new Date(array[index - 1]?.createdAt);
          const period =
            Math.floor((duration / (1000 * 60 * 60)) % 24) * 60 +
            Math.floor((duration / (1000 * 60)) % 60);
        })}
      </div>
      <div className='chatBottom'>
        <form className='chatBottomInput' onSubmit={handleSendMessage}>
          <input
            type='text'
            placeholder='Aa'
            value={messageSender}
            onChange={handlerChatInputChange}
          />

          <div className='chatBottomInputIcon'>
            <div
              className='chatBottomInputIconBg'
              style={{
                backgroundImage: `url("/assets/feed/imgAction.png")`,
                backgroundPosition: '0 -50px',
              }}
            ></div>
          </div>
        </form>
        <div className='chatBottomLikeIcon'>
          {messageSender ? (
            <SendIcon style={{ fontSize: 'inherit' }} />
          ) : (
            <ThumbUpIcon style={{ fontSize: 'inherit' }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ConversationItem;
