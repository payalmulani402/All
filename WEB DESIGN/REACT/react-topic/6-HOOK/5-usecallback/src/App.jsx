import { useState } from 'react'
import './App.css'
import ParentComponent from './Components/ParentComponent'
import Todos from './Components/todos'
import Index from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentComponent /> */}
      <Todos/>
      {/* <Index/> */}
    </>
  )
}

export default App
