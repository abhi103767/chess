// 1 person joined right

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const Loader = ({socket,username}) => {


    

    const navigate = useNavigate()
    console.log('aboving log', username, {socket})

   

    const navigateToChess = () => {
         socket.emit('navigate',  {})
    }
    
    useEffect(() => {
        const room = Math.floor(Math.random() * 10000000); 
        socket.on('foundThePlayer', (data) => {
            console.log('got the found the player')
              navigate('/chess', { state  : {room : data?.room}})
           })
        socket.emit('join_room',  {username,room })
        return () => socket.off('foundThePlayer')
    },[])

    useEffect(() => {
       
    },[])

  
    return  <div>
        Loading ....
        <button onClick={navigateToChess}> Navigate To Chess</button>
    </div>
}


export default Loader;