import { useNavigate } from "react-router-dom"
import { Socket } from "socket.io-client"



const InputFrom = ({ socket,userName, setUsername }) => {

     const navigate = useNavigate()


    const onSubmit = (userName) => {
        const room = Math.floor(Math.random() * 10000000);
        socket.emit('join_room', { userName, room })
        navigate('/loading')
    }

    return <div style={{ width: '300px', height: "200px", margin: 'auto', marginTop: "50px" }}>
        <input placeholder="Please Enter Your Name." style={{ height: "40px" }} onChange={(e) => setUsername(e.target.value)} ></input>
        <button style={{ margin: "10px", cursor: "pointer", height: "40px" }} onClick={(userName) =>  {onSubmit(userName)}}>Play the Game </button>
    </div>


}

export default InputFrom