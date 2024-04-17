import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate(); // Add this
    console.log({socket})

    const joinRoom = () => {
        console.log('join room')
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
        }
        console.log('refering to chat')
        navigate('/chat', { replace: true }); 
      };

    


  return (
    <div >

      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...' onInput={(e) => setUsername(e.target.value)} />

        <select className={styles.input} onChange = {(e) => setRoom(e.target.value)} >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }} onClick={() => joinRoom()}>Join Room</button>

      </div>
    </div>
  );
};

export default Home;