import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'




function UserDetail() {
    const [data, setData] = useState([]);
 
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(({ data }) => {
                setData(data.data);
            })
    }, [])
   

   



    return (
        <div>
            <span>{data.first_name}</span>
            <span>{data.last_name}</span>
        </div>
    )
}

export default UserDetail