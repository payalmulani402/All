import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './Store/Store'
import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Header/>
      <Home/>
      <Cart/>
    </Provider>
    
     
    </>
  )
}

export default App
