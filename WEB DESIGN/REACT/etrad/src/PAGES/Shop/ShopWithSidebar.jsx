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
                        <h1 className=''>CATEGORIES</h1>
                        <span></span>
                    </div>
                    <ul className='text-gray-500'>
                        <li>Sun Care</li>
                        <li>Night Care</li>
                        <li>Treatments</li>
                        <li>Moisturizers</li>
                        <li>Eye Care</li>
                        <li>Masks</li>
                        <li>Featured</li>
                        <li>On Sale</li>
                    </ul>

                    <div>
                        <div className=''>GENDER
                            <ul className='text-gray-500'>
                                <li>Men (40)</li>
                                <li>Women (56)</li>
                                <li>Unisex (18)</li>
                            </ul>
                        </div>
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
