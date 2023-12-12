import React, { useEffect, useState, useRef } from 'react'

const Classcomponets = () => {

  const [name, setName] = useState('')
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })


  return (
    <>
        <div style={{display:"grid", placeItems:"center", margin:"top"}}>
      <div>

          <input value={name} onChange={e => setName(e.target.value)} />
          <div>My Name Is {name}</div>
          <div>I renderd {renderCount.current}</div>
        </div>
      </div>
    </>


  )
}

export default Classcomponets
