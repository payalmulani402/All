import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Speaker from '../../Components/Speaker'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import dataJson from '../../Data.json'
import { Link } from 'react-router-dom'

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

                <section className='PRODUCTJSON my-[100px] container mx-auto'>
                    <div className='grid grid-cols-4 gap-20'>
                        <div>
                            <div className='mb-10'>
                                <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4'>
                                    <h1 className='text-lg text-gray-700 font-semibold'>CATEGORIES</h1>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                </div>
                                <ul className='text-gray-500 leading-10'>
                                    <li><i class="fa-solid fa-circle-check text-[#3577F0] mr-3"></i>Sun Care</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Night Care</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Treatments</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Moisturizers</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Eye Care</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Masks</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Featured</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>On Sale</li>
                                </ul>
                            </div>
                            <div className='mb-10'>
                                <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4'>
                                    <h1 className='text-lg text-gray-700 font-semibold'>GENDER</h1>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                </div>
                                <ul className='text-gray-500 leading-10'>
                                    <li><i class="fa-solid fa-circle-check text-[#3577F0] mr-3"></i>Men (40)</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Women (56)</li>
                                    <li><i class="fa-regular fa-circle mr-3"></i>Unisex (18)</li>
                                </ul>
                            </div>
                            <div className='mb-10'>
                                <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 '>
                                    <h1 className='text-lg text-gray-700 font-semibold'>COLORS</h1>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                </div>
                                <div>
                                    <ul className='flex items-center mt-8'>
                                        <li className='bg-[#906145] h-4 w-4 mr-2 rounded-full outline outline-2 outline-offset-4 outline-[#906145] cursor-pointer'></li>
                                        <li className='bg-[#FAB8C4] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#FFDC60] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#896BA7] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBDEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#BADEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DFBF9B] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                    </ul>
                                    <ul className='flex items-center mt-5'>
                                        <li className='bg-[#BADEFF] h-4 w-4 mr-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBDEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBF8FF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#FFEDDC] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mb-10'>
                                <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-6'>
                                    <h1 className='text-lg text-gray-700 font-semibold'>SIZE</h1>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                </div>
                                <div className=' mb-10'>
                                    <ul className='flex items-center mb-3'>
                                        <li className='bg-[#3577F0] text-white rounded-full px-4 py-3 m-1 cursor-pointer'>XS</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 m-1 cursor-pointer'>S</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>M</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 m-1 cursor-pointer'>L</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>XL</li>
                                    </ul>
                                    <ul className='flex items-center'>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>XXL</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>3XL</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>4XL</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-6'>
                                    <h1 className='text-lg text-gray-700 font-semibold'>PRICE</h1>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                </div>
                                <ul className='flex items-center mb-6'>
                                    <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 border-gray-500 mr-3 cursor-pointer'>30</li>
                                    <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>5000</li>
                                </ul>
                                <div>
                                    <input type="range" className='w-full' min="0" max="75" />
                                    <h1 className='font-medium text-gray-700 text-base mt-4'>price:$0 <span className='ml-7'>$3000</span></h1>
                                </div>
                            </div>
                            <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10 mt-16'>
                                <a href="" className='
                                        before:absolute
                                        before:content-[""]
                                        before:bg-[#3577F0]
                                        before:top-0
                                        before:bottom-0
                                        before:left-0
                                        before:right-0
                                        before:hover:scale-105
                                        before:duration-300
                                        before:rounded-md
                                        before:-z-10
                                        '>All Reset</a>
                            </div>
                        </div>

                        <div className='grid col-span-3'>
                            <div className=' flex h-20 items-center justify-end'>
                                <h1 className='font-semibold mr-10'>Showing 1-12 of 84 results</h1>
                                <div className='border-[2px] border-gray-300 rounded-md inline-block'>
                                    <select name="" id="" className='rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                        <option className='text-lg' value="Categories">Short by Latest</option>
                                        <option className='text-lg' value="Fashion">Short by Oldest</option>
                                        <option className='text-lg' value="Electronics">Short by Name</option>
                                        <option className='text-lg' value="Furniture">Short by Pricet</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-10 mt-10'>
                                {
                                    dataJson.slice(0, 9).map(Data => {
                                        return (
                                            <>
                                                <div className='group '>
                                                    <div className='relative overflow-hidden rounded-[35px]'>
                                                        <div>
                                                            <img className='w-96 h-96 object-cover group-hover:scale-110 duration-200' src={Data.image} alt="" />

                                                            <div className=' absolute left-12 -bottom-3 group-hover:bottom-10 duration-700 opacity-0 group-hover:opacity-100'>
                                                                <div className='flex justify-center'>
                                                                    <div className='flex items-center'>
                                                                        <div className='hover:scale-110 duration-300 inline-block'>
                                                                            <Link to="/Wishlist" href="" className=''><i class="fa-regular fa-heart  bg-white p-3 rounded-[4px]"></i></Link>
                                                                        </div>
                                                                        <div className='mx-4'>
                                                                            <Link to="/Cart" href="#" className=" px-7 py-3 z-10 bg-[#ff497c] text-white font-bold rounded-[4px] relative 
                                                                                before:absolute
                                                                                before:contetn-['']
                                                                                before:px-10
                                                                                before:py-5
                                                                                before:bg-[#ff497c] 
                                                                                before:left-0
                                                                                before:top-0
                                                                                before:right-0
                                                                                before:bottom-0
                                                                                before:rounded-[4px]
                                                                                before:-z-10
                                                                                before:hover:scale-110
                                                                                before:duration-300">
                                                                                Add to Cart</Link>
                                                                        </div>
                                                                        <div className='hover:scale-110 duration-300 inline-block '>
                                                                            <a href="#" className=''><i class="fa-regular fa-eye bg-white p-3 rounded-[4px]"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='mt-5'>
                                                            <a className='text-gray-500 font-semibold tracking-wider hover:text-[#3577F0] duration-300 cursor-pointer'>{Data.name}</a>
                                                        </div>
                                                        <div className='flex text-xl font-bold mt-2'>
                                                            <h1 className='text-[#292930] mr-3'>{Data.newprice}</h1>
                                                            <del className='text-gray-300'>{Data.oldprice}</del>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <div className='text-center mt-20'>
                                    <a href="#" className=" px-20 py-5 z-10 bg-[#F6F7FB] text-gray-500 font-bold rounded-[4px] relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-[#F6F7FB] 
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-[4px]
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                        Load More</a>
                                </div>
                            </div>

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
