import React from 'react'
import { TopBar } from '../../Components/HomeDropdown/HomeDropdownHover'
import HomeNavBar from '../../Components/HomeNavbar/HomeNavBar'
import HomeService from '../../Components/HomeService'
import HomeHoverPhoto from '../../Components/HomeHoverPhoto'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import '../Home/HomeStyle.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Zoom } from 'swiper/modules';
import headphone from '../../assets/home/asset 6.png'
import watch from '../../assets/home/asset 7.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoubleSlide from '../../Components/HomeNavbar/DoubleSlide'
import FeedBack from '../../Components/HomeNavbar/FeedBack'
import HomeSlideProduct from '../../Components/HomeNavbar/HomeSlideProduct'

const Home = () => {
    let slider;
    const setting = {
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 3
      };

      const handlPrev = () => {
        slider.slickPrev();
      };

      const handlNext = () => {
        slider.slickNext();
      };
  
    return (
        <>
            <div className='Body bg-white' id='top-scroll'>

                <section className='HOME-DROPDOWN py-2 '>
                    <TopBar />
                </section>

                <section className='HOME-NAVBAR sticky top-2 z-50'>
                    <HomeNavBar />
                </section>

                <section className='HERO-SECTION bg-[#F9F3F0] h-[700px] relative overflow-hidden '>
                    <div className='BACKGROUND-IMG'>
                        <img className='absolute right-[340px] -bottom-20' src="./src/assets/Home/asset 8.png" alt="" />
                        <img className='absolute right-[40px] -bottom-12' src="./src/assets/Home/asset 9.png" alt="" />
                        <div className='absolute left-[45%] bottom-10'>

                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className='BACKGROUND-DETAIL-HEADPHONE absolute top-[30%]'>
                            <div className='flex mb-4'>
                                <i className="ri-fire-fill h-6 w-6 text-base bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'> Hot Deal In This Week</h1>
                            </div>
                            <p className='font-bold text-6xl text-[#292930] tracking-wide leading-[75px] mb-10'>Roco Wireless<br /> Headphone</p>

                            <div className='flex items-center'>
                                <div className="BUTTON">
                                    <Link to="/ShopNoSidebar" href="#" className="px-9 py-5 z-10 bg-white font-bold rounded-md relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                before:bg-white
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-md
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                        <i class="ri-shopping-cart-line mr-2"></i>Shop Now </Link>
                                </div>

                                <div className='flex ml-8'>
                                    <div className="IMAGES-CIRCLE">
                                        <ul className="flex">
                                            <li className=" border-2 rounded-full "><img src="./src/assets/Home/asset 2.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 3.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 4.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white" ><img src="./src/assets/Home/asset 5.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className='STARS ml-5'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='BACKGROUND-DETAIL-WATCH absolute top-96 hidden'>
                            <div className='flex mb-4'>
                                <i className="ri-fire-fill h-6 w-6 text-base bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'> Hot Deal In This Week</h1>
                            </div>
                            <p className='font-bold text-6xl text-[#292930] tracking-wide leading-[75px] mb-10'>Smart Digital<br /> Watch</p>

                            <div className='flex items-center'>
                                <div className="BUTTON">
                                    <Link to="/ShopNoSidebar" href="#" className="px-9 py-5 z-10 bg-white font-bold rounded-md relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-white
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-md
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                        <i class="ri-shopping-cart-line mr-2"></i>Shop Now</Link>
                                </div>

                                <div className='flex ml-8'>
                                    <div className="IMAGES-CIRCLE">
                                        <ul className="flex">
                                            <li className=" border-2 rounded-full "><img src="./src/assets/Home/asset 2.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 3.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 4.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white" ><img src="./src/assets/Home/asset 5.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className='STARS ml-5'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <Swiper className="mySwiper swiper-container w-[840px] pr-[150px] absolute -right-16 top-48 z-10"
                                slidesPerview={2}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={{clickable: true}}
                                onSlideChange={() => { Zoom }}
                                onReachEnd={() => { false }}
                                loop={() => { true }}
                                modules={[Pagination]}

                            >

                                <SwiperSlide className=''><img className='image-1' src={headphone} alt="" />
                                    <div className='round w-24 h-24 text-center pt-5 absolute top-10 right-[50%] z-10 bg-white rounded-full transition-[0.5s]'>
                                        <h1 className='text-gray-500 text-base'>From</h1>
                                        <h3 className='font-bold text-lg text-blue-500'>$ 49.00</h3>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className=''><img className='image-1' src={watch} alt="" />
                                    <div className='round w-24 h-24 text-center pt-5 absolute top-10 right-[50%] z-10 bg-white rounded-full' >
                                        <h1 className='text-gray-500 text-base'>From</h1>
                                        <h3 className='font-bold text-lg text-blue-500'>$ 49.00</h3>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide><img className='image-1' src={headphone} alt="" /> </SwiperSlide>
                                <SwiperSlide><img className='image-1' src={watch} alt="" /> </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </section>

                <section className='sticky top-[830px]'>
                    <a href="#top-scroll" className='absolute right-10'><i class="fa-solid fa-arrow-up bg-[#3577F0] p-4 rounded-md text-white"></i></a>
                </section>

                <section className='CATEGORIES container mx-auto mt-14 '>
                    <div className=' mb-[200px]'>
                        <div className='flex mb-3'>
                            <i className="ri-price-tag-3-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                            <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Categories</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Browse by Category</h1>
                            <div className='text-gray-400'>
                                <div className='hover:scale-110 duration-300 inline-block'>
                                    <button onClick={handlPrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                                <div className='hover:scale-110 duration-300 inline-block '>
                                    <button onClick={handlNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="  gap-4 mt-10">
                        <Slider  ref={(c) => (slider = c)} {...setting}>

                            <div href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer ">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 15.png" alt="" />
                                </div>
                                
                                <p className='text-gray-800'>Phones</p>
                            </div>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 16.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Computers</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 17.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Accessories</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 18.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Laptops</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 19.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Monitors</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 10.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Networking</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                </div>
                                <p className='text-gray-800'>PC Gaming</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                    <div className="flex justify-center">
                                        <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                    </div>
                                    <p className='text-gray-800'>Smartwatches</p>
                                </a>
                                <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                    <div className="flex justify-center">
                                        <img className="mb-3" src="./src/assets/Home/asset 13.png" alt="" />
                                    </div>
                                    <p className='text-gray-800'>Headphones</p>
                                </a>
                                <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                    <div className="flex justify-center">
                                        <img className="mb-3" src="./src/assets/Home/asset 14.png" alt="" />
                                    </div>
                                    <p className='text-gray-800'>Camera & Photo</p>
                                </a>
                                <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                    <div className="flex justify-center">
                                        <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                    </div>
                                    <p className='text-gray-800'>Video Games</p>
                                </a>
                                <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                    <div className="flex justify-center">
                                        <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                    </div>
                                    <p className='text-gray-800'>Sports</p>
                                </a>
                        </Slider>
                        </div>
                    </div>
                </section>

                <section className='HEADPHONES-PHOTO mb-[100px] container mx-auto '>
                    <div className='relative w-full h-[500px] rounded-md bg-[#F6F7FB] '>
                        <img className='absolute right-48 -top-24' src="./src/assets/home/asset 20.png" alt="" />
                        <div className='music-signal'>
                            <div className='item-circle circle-1'></div>
                            <div className='item-circle circle-2'></div>
                            <div className='item-circle circle-3'></div>
                            <div className='item-circle circle-4'></div>
                            <div className='item-circle circle-5'></div>
                        </div>

                        <div className='absolute top-16 left-16'>
                            <div className='flex mb-3'>
                                <i className="ri-headphone-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Don’t Miss!!</h1>
                            </div>
                            <p className='font-bold text-5xl text-[#292930] leading-tight tracking-wide'>Enhance Your<br /> Music Experience</p>
                            <div className='flex my-[30px]'>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-7 mr-4 '>
                                    <p className='flex justify-center text-2xl'>0</p>
                                    <p className='text-sm text-gray-500 font-medium '>Day</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Hrs</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Min</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Sec</p>
                                </div>
                            </div>

                            <div className='relative group z-10 '>
                                <a href='#top-scroll' className='absolute px-9 py-4 text-white font-bold rounded-md bg-[#3577F0]  
                                before:content-[""]
                                before:w-[162px]
                                before:[50px]
                                before:bg-[#3577F0]  
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                                >Check it Out!</a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='JSONDATA Double-slide'>
                    <DoubleSlide/>
                </section>

                <section className='FEED-BACK'>
                    <FeedBack/>
                </section>

                <section className='JSONDATA Single silde my-[100px]'>
                    <HomeSlideProduct/>
                </section>
              
                <section className='TRADE-STORE container mx-auto'>
                    <div className='border-b pb-20'>
                        <div className='mt-14'>
                            <div className='mb-12 text-center'>
                                <p className="text-[#8C71DB] font-medium mb-2"><i class="ri-shining-2-fill bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>Most Sold</p>
                                <h1 className="font-bold text-4xl text-[#292930] ">Most Sold in eTrade Store</h1>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8'>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1"><img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</Link>
                                        <p className='text-xl font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</Link>
                                        <p className='text-xl font-bold'>$49.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 34.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>120+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Gaming Controller</Link>
                                        <p className='text-xl font-bold'>$50.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 35.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>30+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wall Mountr</Link>
                                        <p className='text-xl font-bold'>$19.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 36.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>700+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Lenevo Laptop</Link>
                                        <p className='text-xl font-bold'>$999.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 37.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>300+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Juice Grinder Machine</Link>
                                        <p className='text-xl font-bold'>$99.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 38.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wireless Headphone</Link>
                                        <p className='text-xl font-bold'>$59.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <Link to="/ProductV1">
                                            <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 39.png" alt="" /></Link>
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <Link to="/ProductV1" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Asus Zenbook Laptop</Link>
                                        <p className='text-xl font-bold'>$899.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <Link to="/Cart" href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                    <Link to="/Wishlist" href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className='HOME-SERVICES '>
                    <HomeService />
                </section>

                <section className='HOME-FOOTER '>
                    <HomeHoverPhoto />
                    <SubscribePhoto />
                    <Footer />
                </section>

            </div>

        </>
    )
}

export default Home
