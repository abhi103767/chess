import React from 'react'
import { useParams } from 'react-router-dom'


function UserDetail() {
    const { id } = useParams();
    return (
        <div>UserID : {id}</div>
    )
}

export default UserDetail