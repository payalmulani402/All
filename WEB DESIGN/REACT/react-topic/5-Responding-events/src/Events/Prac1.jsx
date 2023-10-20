// import React from 'react'

// const Prac1 = () => {
//     /*  Task-1 : Two props pass as button name and print in console */

//     const a = () => {
//         console.log("click me");
//     }

//     const b = () => {
//         console.log("click button");
//     }

//     const all = () => {
//         a();
//         b();
//     }
//     return (
//         <div>
//             {/* <h1 className='ml-80'>React onClick Events 1</h1> */}

//             <button className='border border-gray-700 px-6 py-2 m-3 bg-yellow-200' onClick={a}>click</button>
//             <button className='border border-gray-700 px-6 py-2 m-3 bg-yellow-200' onClick={b}>click</button>
//             <button className='border border-gray-700 px-6 py-2 m-3 bg-yellow-200' onClick={all}>click</button>
//         </div>
//     )
// }

// export default Prac1


import React from 'react'

const Hello = ({text,children}) => {
    return (
        <button className="button" onClick={text}>{children}</button>
    );
}

const Prac1 = () => {
  return (
    <div>
      <Hello  text = {() => console.log("skill")}>click</Hello> 
      <Hello text = {() => console.log("how are you")}>click me</Hello> 
    </div>
  )
}

export default Prac1

