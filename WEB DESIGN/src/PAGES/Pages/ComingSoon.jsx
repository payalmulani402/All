import React from 'react'

const Comingsoon = () => {
    return (
        <div className='Comingsoon-section flex items-center h-screen'>
            <img className="h-screen" src="./src/assets/pages/coming soon/asset 1.jpeg" alt="" />
            <div className='text-center ml-60 '>
                <img className=' mx-auto mb-6 ' src="./src/assets/pages/coming soon/asset 0.png" alt="" />
                <h1 className='font-bold text-3xl mb-5'>Our new website is on the way</h1>
                <p className='mb-10 text-gray-500'>We're coming soon! We're working hard to give <br />you
                    the best experince.</p>
                <div className=' content-section flex '>
                    <div className='bg-blue-700 text-white rounded-full py-5 px-10 mr-4 mx-auto shadow-md shadow-blue-400 '>
                        <p className='flex justify-center text-3xl font-semibold '>0</p>
                        <p className='text-sm'>Day</p>
                    </div>
                    <div className='bg-blue-700 text-white rounded-full py-6 px-9  mr-4 mx-auto shadow-md shadow-blue-400 '>
                        <p className='flex justify-center text-3xl font-semibold '>00</p>
                        <p className='text-sm'>Hrs</p>
                    </div>
                    <div className='bg-blue-700 text-white rounded-full py-6 px-9 mr-4  mx-auto shadow-md shadow-blue-400 '>
                        <p className='flex justify-center text-3xl font-semibold '>00</p>
                        <p className='text-sm'>Min</p>
                    </div>
                    <div className='bg-blue-700 text-white rounded-full py-6 px-9 mx-auto shadow-md shadow-blue-400 '>
                        <p className='flex justify-center text-3xl font-semibold  '>00</p>
                        <p className='text-sm'>Sec</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Comingsoon
