// 1 person joined right

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const Loader = ({socket,username}) => {

    const navigate = useNavigate()
    console.log('aboving log', username)
   

    useEffect(() => {
        const room = Math.floor(Math.random() * 10000000); 
        console.log({username})
        socket.emit('join_room',  {username,room })
    },[])

    useEffect(() => {
        socket.on('foundThePlayer', (data) => {
         console.log('got the found the player')
           navigate('/chess')
        })
    },[socket])

    return  <div>
        Loading ....
    </div>
}


export default Loader;