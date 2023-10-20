import { useState } from 'react'
import ClickOn1 from './Events/ClickOn1'
// import ClickOn2 from './Events/ClickOn2'
// import ClickOn3 from './Events/ClickOn3'
// import ClickOn4 from './Events/ClickOn4'
// import ClickOn5 from './Events/ClickOn5'
// import ClickOn6 from './Events/ClickOn6'
// import Prac1 from './Events/Prac1'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickOn1/>
      {/* <ClickOn2 /> */}
      {/* <ClickOn3 /> */}
      {/* <ClickOn4 /> */}
      {/* <ClickOn5/> */}
      {/* <ClickOn6 /> */}
      {/* <Prac1/> */}
    </>
  )
}

export default App

  
// passing a function (correct) :-

{/* <button onClick={handleClick}> </button> */}


// calling a function (incorrect) :-

{/* <button onClick={handleClick()}> </button> */}
