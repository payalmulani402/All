import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Error404 from './pages/Error404'
import User from './Roucter-Hook-params/Pages/User'
import Contact from './pages/Contact'
import Filter from './pages/Filter'
import C1 from './pages/C1'
import C2 from './pages/C2'
import C3 from './pages/C3'

function App() {

  return (
    <>
      <div className='' >
        <div className='text-2xl'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/product' element={<Product />}></Route>
              {/* <Route path='/*' element={<Error404 />}></Route> */}
              <Route path='/User' element={<User />}></Route>


              <Route path='/filter' element={<Filter />}></Route>
              <Route path='/contact/' element={<Contact />}>
                <Route path='c1' element={<C1 />}></Route>
                <Route path='c2' element={<C2 />}></Route>
                <Route path='c3' element={<C3 />}></Route>

              </Route>

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */