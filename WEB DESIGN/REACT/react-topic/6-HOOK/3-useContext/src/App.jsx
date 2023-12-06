
{/* WithoutuseContext :- */ }

// import UseDemo_A from './PropDhrilling/UseDemo_A'

// function App() {

// const surname = "mulani"

//   return (
//     <>
//         <UseDemo_A surname={surname}/>
//     </>
//   )
// }

// export default App

// useContext :-
import React from 'react'
import Example_A from './UseContext/Example_A'


export const UserContext = React.createContext()
const App = () => {
  return (
    <>
      <div>
        <UserContext.Provider value={"payal"}>
        <Example_A/>
          
        </UserContext.Provider>
        
      </div>
    </>
  )
}

export default App