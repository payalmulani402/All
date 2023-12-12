import React from 'react'
import Navbar  from '../Components/Navbar'
import Image from '../assets/image.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-5xl mt-12'>
        <div className='flex justify-between'>
          <div className='w-[700px]'>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid fuga voluptas molestiae totam ullam inventore natus cupiditate at, id tempore cumque aut deserunt ducimus, vitae harum, in porro eius reprehenderit omnis nostrum ab incidunt distinctio veritatis? Excepturi, iure harum. Dicta, odit non eius illum laudantium quam provident tempora ducimus pariatur omnis sunt, numquam ipsum nihil delectus sit fuga accusamus, nemo doloremque quidem maiores. Omnis, aliquam nesciunt. Saepe nemo assumenda fuga laudantium quos cumque, ad sunt accusantium enim, consectetur id recusandae magnam distinctio excepturi ab obcaecati. Expedita doloremque pariatur rerum at suscipit, temporibus beatae eaque atque itaque adipisci soluta et magnam.</p>
          </div>
          <div className='w-96'>
            <img src ={Image} className="w" alt="" />
          </div>
        </div>
      </h1>

    </div>
  )
}

export default Home
