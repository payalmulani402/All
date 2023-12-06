import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [image,setimage] = useState ("")
  const submitImage = () => {
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","payall")
    data.append("cloud_name","dvwj7e2gy")

    fetch("https://api.cloudinary.com/v1_1/dvwj7e2gy/image/upload", {
      method: "post",
      body: data
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div>
        <div>
          <input type="file" onChange={(e)=> setimage(e.target.files[0])}></input>
          <button onClick={submitImage}>upload</button>
        </div>
      </div>
    </>
  )
}

export default App
