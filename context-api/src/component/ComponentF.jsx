import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'



function ComponentF() {
    let user = useContext(UserContext);
    let channel = useContext(ChannelContext);

    return (
        <div>
            {user + "   " + channel}

        </div>
    )
}
export default ComponentF