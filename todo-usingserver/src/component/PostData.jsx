import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

function PostData({ checksubmit }) {
    console.log(checksubmit)
    const [form, setForm] = useState({
        id: nanoid(),
        firstName: '',
        secondName: '',
    })


    function changeFrom(e) {

        console.log(e.target.name, e.target.value)
        setForm((perv) => ({
            ...perv,
            [e.target.name]: e.target.value,
        }))

        console.log(form)

    }



    function submit() {
        axios.post('http://localhost:3000/posts', form)
            .then((res) => console.log(res.data));
        setForm((perv) => {
            return {
                ...perv,
                id: nanoid()
            }
        })
    };
    return (
        <div >
            <input placeholder='First Name' name='firstName' onChange={changeFrom} />
            <input placeholder='Last Name' name='secondName' onChange={changeFrom} />
            <button onClick={() => {
                submit()
                checksubmit()
            }}>Save
            </button>
        </div>
    )
}

export default PostData