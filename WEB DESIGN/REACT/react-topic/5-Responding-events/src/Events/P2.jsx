import React from 'react'

function P2() {
    function ABC () {
        alert ("payal mulani")
    }
    function XYZ () {
        alert ("kishan bhalala")
    }
    function all () {
        ABC ();
        XYZ ();
    }
  return (
    <div>
    <h1 onClick={ABC}>click1</h1>
    <h1 onClick={XYZ}>click2</h1>
    <h1 onClick={all}>click3</h1>
      
    </div>
  )
}

export default P2
