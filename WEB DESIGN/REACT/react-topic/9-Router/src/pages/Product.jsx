import React from 'react'
import Navbar from '../Components/Navbar'
import Image from '../assets/image.jpg'

const Product = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-5xl mt-12'>
        <div className='flex justify-between'>
          <div className='w-[700px]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti natus, laboriosam nostrum voluptatibus veniam magni numquam. Omnis, unde eveniet. Voluptas odit quibusdam dicta debitis placeat iste aliquid at, eligendi accusamus, tempora laborum incidunt illo? Perferendis a, fugiat, ducimus aliquam, error asperiores sit cupiditate rerum id dolore temporibus. In pariatur, ut illum, explicabo quibusdam natus id dolor commodi vero eos quam, voluptatum reprehenderit impedit molestiae laborum? Ad enim voluptatibus vitae fugit dolores laborum molestiae, possimus sint tempora corrupti. Laboriosam porro earum ut aliquam harum nostrum pariatur expedita culpa quos nesciunt. Expedita dicta labore fugit mollitia! Mollitia voluptatum ipsum quidem deserunt.</p>
          </div>
          <div className='w-96'>
            <img src={Image} className="w" alt="" />
          </div>
        </div>
      </h1>

    </div>
  )
}

export default Product
