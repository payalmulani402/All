
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './Components/Redux/CakeContainer'
import store from './Components/Store'
import Todolist from './Components/Todolist/Todolist'

function App() {

  return (
    <>
      <div>
        {/* <Provider store={store}>
          <CakeContainer />
        </Provider> */}
        <Todolist/>
      </div>
    </>
  )
}

export default App
