import React from 'react'
import Navbar from '../Components/Navbar'
import image from '../assets/image.jpg'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-5xl mt-12'>
        <h1 className='text-xl'>this is about page</h1>
        <div className="flex justify-between">
          <div className="w-[700px]">
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt atque vitae minus nulla consequatur culpa adipisci ipsa excepturi quod iste, quia pariatur reiciendis dolorum, ipsum velit tenetur expedita repellat nemo, quasi a! Nemo doloribus earum cum blanditiis libero quae expedita, modi consequuntur reiciendis nulla aliquid necessitatibus, dolores ipsa quidem! Itaque, recusandae obcaecati. Quidem labore molestias iusto sed fugit, amet voluptatibus saepe numquam aspernatur debitis, reiciendis facere beatae dolore sit consequuntur aperiam eius vero inventore nam cumque quaerat deleniti fugiat quam. Esse in voluptatibus distinctio eius laboriosam iusto rerum molestias nulla eos fugiat nihil eveniet, nisi eligendi doloribus laborum voluptate!</p>
          </div>
          <div className="w-96">
            <img src={image} alt="" />
          </div>
        </div>
        <Link to="/" className='text-xl'>Go to Home page</Link>
        <li className='text-xl'><Link className="link" to="/user/mark">Mark Page</Link></li>
        <li className='text-xl'><Link className="link" to="/user/anil">anil Page</Link></li>

      </h1>
    </div>
  )
}

export default About
