export const messageChatArrival = (data, dispatch) => {
  dispatch({ type: 'MESSAGE_CHAT_ARRIVAL', payload: data });
};
