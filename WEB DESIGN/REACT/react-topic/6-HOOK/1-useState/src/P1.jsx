import React from 'react'
import { useState } from 'react'

function P1() {
    const [index,setIndex] = useState();
    function next() {
        setIndex(index+1);
    }
        function prev (){
            setIndex(index-1)
        }
    
  return (
    <div>
    <h1 onClick={ next}></h1>
    <h1 onClick={ prev}></h1>
    <div>{index}</div>
      
    </div>
  )
}

export default P1
