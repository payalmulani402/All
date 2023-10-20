import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Task1 = () => {
    const [val, setval] = useState()

    useEffect(() => {
        // console.log(`${val}`);
        document.title = `${val}`  
    },[])
    
    const changes = (e) => {
        setval(e.target.value)
    }
    return (
        <div>
            <select onChange={changes}>
                <option>-- --</option>
                <option>chrome</option>
                <option>safari</option>
                <option>mozila</option>
            </select>
            <h1>selected :- {val}</h1>
        </div>
    )
}

export default Task1

