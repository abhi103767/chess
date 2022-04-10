import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const intialState = {
    error: '',
    loading: true,
    post: {}
}

function reducer(state, action) {
    switch (action.type) {
        case "Success":
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: ''
            }

        case "Fail":
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: 'Something went Wrong'

            }

        default:
            return state
    }

}

function DataFetchingTwo() {

    let [data, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "Success", payload: res.data });

            })
            .catch((res) => {
                dispatch({ type: 'Fail', payload: {} });
            })
    }, [])
    return (
        <div>
            {data.loading && <p>loading</p>}
            {data.error !== '' && <p>{data.error}</p>}
            <div>{data.post.title}</div>
        </div>
    )
}

export default DataFetchingTwo