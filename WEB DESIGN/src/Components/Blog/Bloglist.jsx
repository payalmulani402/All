import React from 'react'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../AllNavbar/AllNavBar'
import Footer from '../Footer/Footer'

const Bloglist = () => {
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
            <div className='flex items-center justify-between h-52 bg-[#F8F8F8] px-24'>
                <div className=''>
                    <a className='text-gray-500 hover:text-blue-600 mr-2' href="">Home</a>
                    <a className=' text-gray-400' href="">|</a>
                    <a className='text-blue-600 ml-2' href="">My Account</a>
                    <h1 className='text-4xl font-bold text-[#292930] mt-4'>Blog List</h1>
                </div>
                <div>
                    <img className='ml-[850px]' src="./src/assets/shop/shopwithsidebar/asset 2.png" alt="" />
                </div>
            </div>



            <div className='main-section flex '>
                <div className='right-section ml-32 '>
                    <div className=' Dubai-section  h-[400px]  w-[850px] bg-[#f9f3f0]   border-l-4 border-red-200 mt-16 p-14 '>
                        <a className="text-2xl hover:text-blue-600 duration-300" href="">Dubai’s Offers its Take Nike SB Dunk.</a>
                        <div className='main-section mt-10 flex '>
                            <div className='image-section '>
                                <img className='h-10 w-10 rounded-full ' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <a className="" href="">Ralph Edwards</a>
                                <ul className='flex'>
                                    <li className='text-gray-600'>Mar 25, 2022  |</li>
                                    <li className='text-gray-600 ml-4'>300k Views</li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-gray-600 mt-8'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.<br /> Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.<br /> Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        <a href="">
                            <button className='border  h-14 w-36 border-gray-400 rounded mt-10 bg-blue-600 text-white'>Read More</button>
                        </a>
                    </div>



                    <div >
                        <img className='mt-32 h-[400] w-[850] ' src="../src/assets/blog/blog-list/asset 4.png" alt="" />
                    </div>



                    <div className=' '>
                        <div className='  h-[400px]  w-[850px]  border-red-200 mt-8 '>
                            <a className="text-2xl hover:text-blue-600 duration-300 " href="">UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan<br /> Brand</a>
                            <div className='main-section mt-10 flex '>
                                <div className='image-section '>
                                    <img className='h-10 w-10 rounded-full' src="../src/assets/blog/blog-list/asset 3.png" alt="" />
                                </div>
                                <div className='ml-5'>
                                    <a className="" href="">Theresa Underwood</a>
                                    <ul className='flex'>
                                        <li className='text-gray-600'>Mar 27, 2022  |</li>
                                        <li className='text-gray-600 ml-4'>9 min to read</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='text-gray-600 mt-8'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.<br /> Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.<br /> Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                            <a href="">
                                <button className='border  h-14 w-36 border-gray-400 rounded mt-10 bg-blue-600 text-white'>Read More</button>
                            </a>
                        </div>
                    </div>


                    <div className=' Dubai-section  h-[250px]  w-[850px] bg-[#f9f3f0]   border-l-4 border-red-200 mt-16 p-14 '>
                        <a className="text-4xl font-bold italic hover:text-blue-600 duration-300" href="">“An oral history of the AIM away message (by the people who were there)”</a>
                        <div className='main-section mt-10 flex '>
                            <div className='image-section '>
                                <img className='h-10 w-10 rounded-full ' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <a className="" href="">Theresa Underwood</a>
                                <ul className='flex'>
                                    <li className='text-gray-600'>Mar 27, 2022  |</li>
                                    <li className='text-gray-600 ml-4'>300k Views</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className='video-section'></div>





                    <div className=' '>
                        <div className='  h-[400px]  w-[850px]  border-red-200 mt-8 '>
                            <a className="text-2xl hover:text-blue-600 duration-300 " href="">UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan<br /> Brand</a>
                            <div className='main-section mt-10 flex '>
                                <div className='image-section '>
                                    <img className='h-10 w-10 rounded-full ' src="../src/assets/blog/blog-list/asset 5.png" alt="" />
                                </div>
                                <div className='ml-5'>
                                    <a className="" href="">Theresa Underwood</a>
                                    <ul className='flex'>
                                        <li className='text-gray-600'>Mar 20, 2022  |</li>
                                        <li className='text-gray-600 ml-4'>300k Views</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='text-gray-600 mt-8'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.<br /> Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.<br /> Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                            <a href="">
                                <button className='border  h-14 w-36 border-gray-400 rounded mt-10 bg-blue-600 text-white'>Read More</button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <img src="../src/assets/blog/blog-list/asset 7.png" alt="" />
                    </div>

                    <div className='  h-[400px]  w-[850px]  border-red-200 mt-8 '>
                        <a className="text-2xl hover:text-blue-600 duration-300 " href="">UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan<br /> Brand</a>
                        <div className='main-section mt-10 flex '>
                            <div className='image-section '>
                                <img className='h-10 w-10 rounded-full ' src="../src/assets/blog/blog-list/asset 8.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <a className="" href="">Leslie Alexander</a>
                                <ul className='flex'>
                                    <li className='text-gray-600'>Mar 15, 2022  |</li>
                                    <li className='text-gray-600 ml-4'>300k Views</li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-gray-600 mt-8'>The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release November 21 in Greater China. A global<br /> release follows November 24.</p>
                        <a href="">
                            <button className='border  h-14 w-36 border-gray-400 rounded mt-10 bg-blue-600 text-white'>Read More</button>
                        </a>
                    </div>


                    <div className='button-section'>
                        <div className=''>
                            <ul className='flex'>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg bg-blue-500 text-white text-lg '>1</a>
                                </li>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg hover:bg-blue-500 duration-300 hover:text-white text-lg'>2</a>
                                </li>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg hover:bg-blue-500 duration-300 hover:text-white text-lg'>3</a>
                                </li>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg hover:bg-blue-500 duration-300 hover:text-white text-lg'>4</a>
                                </li>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg hover:bg-blue-500 duration-300 hover:text-white text-lg'>5</a>
                                </li>
                                <li>
                                    <a className='border px-4 py-2 mr-3 rounded-lg hover:bg-blue-500 duration-300 hover:text-white text-lg'><i class="fa-solid fa-arrow-right"></i></a>
                                </li>
                                </ul>
                        </div>
                    </div>




                </div>
            </div>

                    <div>
                        <Footer/>
                    </div>


                    <div className='Right-section'>
                        <div>
                            <div>
                                <a href=""></a>
                                <ul className='text-2xl'>Dubai’s FRAME Offers its Take on the
                                    <li>Mar 27, 2022</li>
                                    <li>300k Views</li>
                                </ul>

                            </div>
                        </div>
                    </div>
        </>

    )
}

export default Bloglist
