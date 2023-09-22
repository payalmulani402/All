import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import Box1 from './component2/box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <Navbar></Navbar> */}

      <Box1></Box1>
      
    </>
  )
}

export default App
