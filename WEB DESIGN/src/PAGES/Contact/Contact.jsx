import React from 'react'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <div>
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

                <section className='SHOP-SPEAKER'>
                    <Speaker name="Contact With Us" />
                </section>

                <section className='FORM_MAP px-20'>
                    <div className='flex my-[100px]'>
                        <div>
                            <h1 className='text-3xl font-semibold text-[#292930] '>We would love to hear from you.</h1>
                            <p className='text-gray-500 mt-4'>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                            <div>
                                <div className='flex mt-10'>
                                    <div className='relative text-gray-500 mr-6'>
                                        <label className='absolute  left-7 bg-white px-2 font-semibold text-sm'>Name <span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className='border border-gray-300 px-10 py-5 rounded-md font-normal focus:outline-blue-600' />
                                    </div>
                                    <div className='mr-6 relative text-gray-500'>
                                        <label className='absolute  left-7 bg-white px-2 font-semibold text-sm'>Phone <span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className='border border-gray-300 px-10 py-5 rounded-md font-normal focus:outline-blue-600' />
                                    </div>
                                    <div className='mr-6 relative text-gray-500'>
                                        <label className='absolute  left-7 bg-white px-2 font-semibold text-sm'>E-mail <span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className='border border-gray-300 px-10 py-5 rounded-md font-normal focus:outline-blue-600' />
                                    </div>
                                </div>

                                <div className='mr-6 relative text-gray-500 mt-5'>
                                    <label className='absolute  left-7 bg-white px-2 font-semibold text-sm'>your message <span className='text-[#E76458] ml-1'>*</span></label>
                                    <textarea className=' resize-none border border-gray-300 px-9 py-5 rounded-md font-normal focus:outline-blue-600' cols="101" rows="5" ></textarea>
                                </div>
                                <div className=''>
                                    <button className=' hover:scale-110 duration-300 px-8 py-4 mt-5 text-white bg-blue-700 rounded-md'>Send message</button>
                                </div>
                            </div>
                        </div>
                        <div className='ml-10 text-gray-400'>
                            <div className=''>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Our Store</h1>
                                <p className='mb-5 leading-8' >8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
                                <p>Phone: +123 456 7890</p>
                                <p className='mb-10 leading-8' >Email: Hello@etrade.com</p>
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Careers</h1>
                                <p className='mb-10'>Instead of buying six things, one that you really like</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>pening Hours:</h1>
                                <p>Monday to Saturday: 9am - 10pm</p>
                                <p className='leading-8'>Sundays: 10am - 6pm</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Contact
