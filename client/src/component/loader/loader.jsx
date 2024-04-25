// 1 person joined right

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const Loader = ({socket}) => {

    const navigate = useNavigate()

    useEffect(() => {
        socket.on('foundThePlayer', (data) => {
           navigate('/chess')
        })
    },[socket])

    return  <div>
        Loading ....
    </div>
}


export default Loader;