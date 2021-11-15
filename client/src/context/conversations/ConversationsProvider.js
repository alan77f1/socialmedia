import { createContext } from 'react';

const initialState = JSON.parse(localStorage.getItem('CONVERSATIONS')) || [];
// JSON.parse(localStorage.getItem('CONVERSATIONS')) ||
export const ConversationsContext = createContext(initialState);

export const ConversationsContextProvider = ({ children }) => {
  return (
    <ConversationsContext.Provider>{children}</ConversationsContext.Provider>
  );
};
