import { useState } from "react";
import { useRef } from "react"

const InputFocus = () => {

  const inputRef = useRef("payal")
  console.log(inputRef);

  function reset() {
    setName("")
    inputRef.current.focus()
    inputRef.current.style.color = "green"
    inputRef.current.style.textDecoration = "none"
  }

  function handleClick() {
    inputRef.current.style.color = "yellow"
    inputRef.current.style.textDecoration = "underline"
  }

  const [name, setName] = useState("payal")



  return (
    <>
      <div style={{display:"grid", placeItems:"center", margin:"top"}}>
        <div>
          <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={reset}>Reset</button>
          <button onClick={handleClick}>handleInput</button>
        </div>
      </div>
    </>
  )
}

export default InputFocus