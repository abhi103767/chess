import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Link
} from 'react-router-dom';


function UserList() {
    const [user, setUser] = useState([]);


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(({ data }) => {
                setUser(data.data);
            })
    }, [])
    return (
        <div>

            {
                user.map((item) => (<p key={item.id}>
                    <Link to={`/userlist/${item.id}`}> {item.id}. {item.first_name} </Link>
                </p>))
            }

        </div>
    )
}

export default UserList