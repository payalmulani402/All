import React from 'react'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Typography = () => {
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

            <div className='First-part px-24 '>
                <div className='flex text-5xl font-semibold mt-5'>
                    <h1 className=''>h1 - A Visual Type Scale </h1>
                    <h1 className='ml-[128px]'>46px</h1>
                </div>
                <div className='flex text-4xl font-semibold mt-5'>
                    <h1 className=''>h2 - A Visual Type Scale </h1>
                    <h1 className='ml-64'>36px</h1>
                </div>
                <div className='flex text-3xl font-semibold mt-5'>
                    <h1 className=''>h3 - A Visual Type Scale </h1>
                    <h1 className='ml-80'>28px</h1>
                </div>
                <div className='flex text-2xl font-semibold mt-5'>
                    <h1 className=''>h4 - A Visual Type Scale </h1>
                    <h1 className='ml-96'>24px</h1>
                </div>
                <div className='flex text-xl font-semibold mt-5'>
                    <h1 className=''>h5 - A Visual Type Scale </h1>
                    <h1 className='ml-[428px]'>20px</h1>
                </div>
                <div className='flex  font-semibold mt-5'>
                    <h1 className=''>h1 - A Visual Type Scale </h1>
                    <h1 className='ml-[473px]'>18px</h1>
                </div>

                <div className=''>
                    <div className='mt-8'>
                        <p className='text-gray-500'>B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident<br/> quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam<br/> beatae itaque dicta vitae! Magni esse ex rem.</p>
                    </div>

                    <div className='mt-8'>
                        <p className='text-gray-500 text-sm'>B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet<br/> non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta<br/> vitae! Magni esse ex rem.</p>
                    </div>

                    <div className='mt-8'>
                        <p className='text-gray-500 text-xs'>B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi.<br/> Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
                    </div>
                </div>



            </div>
            <div>
                <Footer />
            </div>




        </>
    )
}

export default Typography
