import React from 'react'

const ClickOn1 = () => {
    /* React Events Handling */
    function a() {
        alert("you are clicked me orange!");
    }
    const b = () => {
        alert("you are using function gray!");
    }
    const all = () => {
        a();
        b();
    }
    b

    return (
        <div>
            <h1 className='ml-80'>React onClick Events 1</h1>
            <button className="px-12 h-16 w-48 bg-orange-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={a}>Click</button>

            <button className="px-12 h-16 w-48 bg-gray-500 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={b}>Click</button>

            <button className="px-12 h-16 w-48 bg-green-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={all}>Click</button>
        </div>
    )
}

export default ClickOn1
