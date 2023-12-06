import React from 'react'
 const Signup = () => {
  return (
    <div className='signup-section flex'>
      <div className='image-section h-full w-[700px] relative'>
        <span className='absolute  pt-12 '>
          <a href=""><img className="ml-16 cursor-pointer" src="../src/assets/pages/sign up/asset 0.png" alt="" /></a>
          <h1 className='font-bold text-3xl ml-16 mt-16'>We offer the Best <br />Products</h1>
        </span>
        <img className="w-[490px] h-[900px] overflow-hidden fixed -z-10 object-cover" src="/src/assets/pages/sign up/asset 1.jpeg" alt="" />
      </div>
      

      <div className="form-section w-full">
        <div className="flex justify-end mr-24 mt-10">
        
        <i class="ri-arrow-left-s-line mr-[55%] border  w-9 h-9 pt-1 text-center rounded-md hover:bg-blue-600 border-gray-400  hover:text-white duration-500"></i>
          <p className="mr-7 mt-5 text-sm">Already a member?</p>
          <button className="border bg-[#ff497c] px-8 py-3 rounded-lg text-white text-lg cursor-pointer" type="text">
            sign up
          </button>
          
        </div>
        

        <div className="flex flex-col justify-center mt-16 ml-72">
          <h1 className="font-semibold text-gray-800 text-3xl">Forgot Password?{""}</h1>
          <from action="">
            <div className="text-gray-400 mt-4 text-sm">
            Enter the email address you used when you joined and we’ll <br/> send you instructions to reset your password.</div> 
          </from>

          <from action="">
            <div className="relative mt-12">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2  text-gray-600 text-sm">
                Email
              </label>

              <input className="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500" type="text" placeholder="annie@example.com"></input>
            </div>
            <button className="border px-10 py-4 mt-8 rounded-md  bg-blue-600 text-white font-semibold cursor-pointer">Send Reset instructions</button>
          </from>
        </div>
      </div>
      </div>
  )
}
 export default Signup;

