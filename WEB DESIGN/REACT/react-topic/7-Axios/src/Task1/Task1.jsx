import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Task1 = () => {
    const [mydata, setmydata] = useState([])
    const [myerr, setmyerr] = useState([])
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setmydata(res.data))
            .catch((err) => {
                setmyerr(err.message)
            })
    }, []);

    return (
        <div>
            <h1>{myerr}</h1>
            <div className='grid grid-cols-4 gap-5'>
                {mydata.map((pos) => {
                    const { id, title, body } = pos;
                    return <div className='border py-10 px-5' key={id}>
                        <div className='text-center'>
                            <h1>{id}</h1>
                            <h1>{title}</h1>
                            <h1>{body}</h1>
                        </div>
                    </div>
                })}</div>
        </div>
    )
}

export default Task1
