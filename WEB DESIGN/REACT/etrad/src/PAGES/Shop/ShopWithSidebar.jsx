import React from 'react'

import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'


const ShopWithSidebar = () => {
    return (
        <>
            <div>

                <section className='SHOP-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='SHOP-SPEAKER'>
                    <Speaker p1="My Account" p2="Explore All Products" />
                </section>

                <section className='mx-auto container'>
                    <div>
                        <h1 className='text-2xl mt-28'>CATEGORIES</h1>
                        
                    </div>
                    <ul className='text-gray-500'>
                        <li><i class="fa-solid fa-circle-check pr-5 text-[#3577F0] mt-6"></i>Sun Care</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6 "></i>Night Care</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6"></i>Treatments</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6 "></i>Moisturizers</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6 "></i>Eye Care</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6 "></i>Masks</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6"></i>Featured</li>
                        <li><i class="fa-regular fa-circle pr-5 mt-6"></i>On Sale</li>
                    </ul>

                    <div>
                        <h1 className='text-2xl mt-14'>GENDER </h1>
                            <ul className='text-gray-500'>
                                <li><i class="fa-solid fa-circle-check pr-5 mt-6 text-[#3577f0]"></i>Men (40)</li>
                                <li><i class="fa-regular fa-circle pr-5 mt-6"></i>Women (56)</li>
                                <li><i class="fa-regular fa-circle pr-5 mt-6"></i>Unisex (18)</li>
                            </ul>
                       
                    </div>

                    <div>
                        <h1 className='mt-10 text-2xl'>COLORS </h1>
                            <ul className='text-gray-500'></ul>
                       
                    </div>

                    <div >
                        <h1 className=' text-2xl mt-14'>SIZE</h1>
                            <ul className='text-gray-500 mt-10 flex'>
                            <li className='pr-5 '>XS</li>
                            <li className='pr-5'>S</li>
                            <li className='pr-5'>M</li>
                            <li className='pr-5'>L</li>
                            <li className='pr-5 '>XL</li>
                            <li className='pr-5'>XXL</li>
                            <li className='pr-5'>3XL</li>
                            <li className='pr-5'>4XL</li>
                            </ul>
                        
                    </div>
                    <div>
                        <h1 className='mt-10 text-2xl'>PRICE </h1>
                            <ul className='text-gray-500 mt-10 flex'>
                                <li className='pr-5'>30</li>
                                <li className='pr-5'>5000</li>
                            </ul>
                       
                    </div>
                </section>

                <section className='SHOP-FOOTER'>
                    <SubscribePhoto />
                    <Footer />
                </section>

            </div>
        </>
    )
}

export default ShopWithSidebar
