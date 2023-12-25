
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './Components/Redux/CakeContainer'
import store from './Components/Store'

function App() {

  return (
    <>
      <div>
        <Provider store={store}>
          <CakeContainer />
        </Provider>
      </div>
    </>
  )
}

export default App
