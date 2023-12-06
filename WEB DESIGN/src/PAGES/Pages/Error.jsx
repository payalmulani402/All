import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'

const Error = () => {
  return (
    <>
      <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
        <div className='flex justify-between items-center px-24'>
          <div className='flex '>
            <AllDropdownHover1 />
            <AllDropdownHover2 />
          </div>
          <AllRightpart />
        </div>
      </section>

      <section className='SHOP-NAVBAR sticky top-0 z-20 '>
        <AllNavBar />
      </section>

      <section className='SHOP-NAV-BOTTOM'>
        <NavBottom />
      </section>


      <div className='Error-section'>
        <div className='flex  mt-32'>
          <div className='content-section ml-28 mt-20'>
            <div className='flex '>
              <i class="fa-solid fa-circle-exclamation border rounded-full bg-[#ff497c] py-1 px-1 mr-2 text-white"></i>
              <p className='text-[#ff497c] '>Oops! Somthing's missing.</p>
            </div>
            <h1 className='text-4xl font-bold mt-3'>Page not found</h1>
            <p className='mt-10 text-gray-500 mb-10'>It seems like we dont find what you searched. The page you were<br /> looking for doesn't exist, isn't available loading incorrectly.</p>
            <button className=' border py-3 px-9 bg-[#ff497c] text-white rounded-md'>Back To Home <i className='fa-solid fa-arrow-right ml-3'></i></button>
          </div>

          <div className='image-section  ml-32'>
            <img className='w-[600px] h-[400px]' src="../src/assets/pages/Error/asset 2.png " alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}

export default Error
