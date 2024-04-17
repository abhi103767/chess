// src/pages/chat/index.js

import styles from './styles.module.css';
import MessagesReceived from './messages';
import SendMessage from './send-message';
import RoomAndUsersColumn from './room-and-users';

const Chat = ({  socket ,username,room}) => {
    console.log({socket})
  return (    
    <div className={styles.chatContainer}>
       <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage username={username} socket={socket} room = {room}  />
      </div>
    </div>
  );
};

export default Chat;