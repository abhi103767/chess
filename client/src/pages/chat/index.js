// src/pages/chat/index.js

import styles from './styles.module.css';
import MessagesReceived from './messages';
import SendMessage from './send-message';
import RoomAndUsersColumn from './room-and-users';
import { useState } from 'react';

const Chat = ({  socket ,username,room}) => {
  const [messagesRecieved, setMessagesReceived] = useState([]);
    console.log({socket})
  return (    
    <div className={styles.chatContainer} >
       <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} messagesRecieved={messagesRecieved} setMessagesReceived={setMessagesReceived} />
        <SendMessage username={username} socket={socket} room = {room} setMessagesReceived={setMessagesReceived} />
      </div>
    </div>
  );
};

export default Chat;