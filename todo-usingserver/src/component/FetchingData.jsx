import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData({ id, firstName, secondName, checksubmit }) {

    // console.log(firstName, secondName)
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     axios.get('http://localhost:3000/posts')
    //         .then((res) => setData(data));
    // })

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3000/posts/${id}`).then(
            (res) => {
                console.log(res.data)
                checksubmit();
            }
        );

        checksubmit();

    }
    return (
        <div className='single-todo'>
            {firstName && <p>{firstName}</p>}
            {secondName && <p>{secondName}</p>}

            <button onClick={() => {
                onDelete(id);

            }} >Delete</button>


        </div>
    )
}

export default FetchingData