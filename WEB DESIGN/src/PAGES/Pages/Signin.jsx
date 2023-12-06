import React from 'react'
const Signin = () => {
  return (
    <div>
      <div className='signin-section flex h-screen'>
                <div className='image-section h-full w-[700px] relative'>
                    <span className='absolute  pt-12 '>
                        <a href=""><img className="ml-16 cursor-pointer"  src="../src/assets/pages/sign in/asset 0.png" alt="" /></a>
                        <h1 className='font-bold text-3xl ml-16 mt-16'>We Offer the Best <br />Products</h1>
                    </span>
                    <img className=" w-[490px] h-[890px] overflow-hidden fixed -z-10 object-cover " src="./src/assets/pages/sign in/asset 1.jpeg" alt="" />
                </div>

                <div className="form-section w-full">
                    <div className="flex justify-end mr-24 mt-10">
                        <p className="mr-7 mt-5">Not a member?</p>
                        <button className="border bg-[#ff497c] px-10 py-4 rounded-lg text-white text-lg cursor-pointer" type="text">
                            sign in Now
                        </button>
                    </div>

                    <div className="flex flex-col justify-center mt-16 ml-64">
                        <h1 className="font-semibold text-gray-800 text-3xl">Sign in to eTrade.{""}</h1>
                        <div>
                            <div className="text-gray-400 mt-4 text-sm">
                                Enter your details below</div>
                        </div>

                        <div>
                            <div className="relative mt-8">
                                <label className="absolute top -[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">User Name</label>
                                <input class=" w-96 h-14 border mt-2 rounded-lg focus:outline-none focus:border-blue-500 px-6 text-gray-500 text-sm" type="text" placeholder="anniemario"></input>
                            </div>

                            <div className="relative mt-5">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                    Email
                                </label>

                                <input className="w-96 h-14 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500" type="text" placeholder="annie@example.com"></input>
                            </div>
                            <div className="relative mt-5">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                    Password
                                </label>
                                <input class="w-96 h-14 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:boredr-blue-500" type="text" placeholder="........."></input>
                            </div>
                            
                            <div className='flex'>
                            <button className="border px-10 py-4 mt-8 rounded-md  bg-blue-600 text-white font-semibold cursor-pointer">Sign in</button>
                            <p className='mt-12 ml-24'>Forget password?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signin;
