import styles from './styles.module.css';
import React, { useState } from 'react';

const SendMessage = ({ socket, username, room,setMessagesReceived }) => {
  console.log({socket,username,room})
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log({message})
    
    if (message !== '') {
      const __createdtime__ = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      console.log('messages is emitting')

      setMessagesReceived((state) => [
        ...state,
        {
          message,username : "me",room, __createdtime__
        },
      ]);
      socket.emit('send_message', {  message,username,room, __createdtime__ });

      setMessage('');
    }
  }; 

  return (
    <div className={styles.sendMessageContainer}>
      <input
        className={styles.messageInput}
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className='btn btn-primary' onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;