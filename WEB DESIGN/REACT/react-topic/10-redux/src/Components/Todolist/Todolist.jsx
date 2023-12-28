import React from 'react'
import '.././Todolist/Todo.css'

const Todolist = ({rows,deleteRow,EditRow }) => {
    return (
        <div >
            <div className='flex justify-between mt-3'>
                <div className=''>
                    <div className='text-2xl'>Contacts</div>
                </div>
                <div>
                    <div>
                        <button className='bg-blue-500 py-2 px-3 mt-2 mr-5 rounded-md text-white'><span><i class="fa-solid fa-user-plus"></i></span>Add Contact</button>
                        <button className='bg-blue-500 py-2 px-3 mt-2 mr-2 text-white rounded-md'><i class="fa-solid fa-list-check"></i></button>
                        <button className=' border border-blue-500 rounded-md py-2 px-3 mr-2'><i class="fa-brands fa-windows"></i></button>
                        <input type="search" className=' border border-gray-200 py-2 pl-2 w-32 rounded-md ' placeholder='search Contacts' />
                    </div>
                </div>
            </div>

            <table className='w-full table-fixed mt-10'>
                <tr className='bg-gray-100 '>
                    <td className='font-bold py-3'>Name</td>
                    <td className='font-bold py-3'>Email</td>
                    <td className='font-bold py-3'>Location</td>
                    <td className='font-bold py-3'>Phone</td>
                    <td className='font-bold py-3'>Actions</td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Alan Green</td>
                    <td>alan@gmail.com</td>
                    <td>Boston.USA</td>
                    <td>+1 202 555 0197</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Linda Nelson</td>
                    <td>linda@gmail.com</td>
                    <td>Sydney.Australia</td>
                    <td>+1 202 555 0170</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Lila Perry</td>
                    <td>lila@gmail.com</td>
                    <td>Miami,USA</td>
                    <td>+1 202 555 0105</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>


                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Andy King</td>
                    <td>andy@gmail.com</td>
                    <td>Tokyo,Japan</td>
                    <td>+1 202 555 0194</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Jesse Cory</td>
                    <td>jess@gmail.com</td>
                    <td>Edinburgh,UK</td>
                    <td>+1 202 555 0161</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Xavier</td>
                    <td>xavier@gmail.com</td>
                    <td>New York,USA</td>
                    <td>+1 202 555 0155</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Susan</td>
                    <td>susan@gmail.com</td>
                    <td>Miami,USA</td>
                    <td>+1 202 555 0118</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Raci Lopez</td>
                    <td>traci@gmail.com</td>
                    <td>Edinburgh,UK</td>
                    <td>+1 202 555 0135</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Steven Mendoza</td>
                    <td>sokol@gmail.com</td>
                    <td>Monrovia,Us</td>
                    <td>+1 202 555 0100</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />James Cantrell</td>
                    <td>sravani@gmail.com</td>
                    <td>Michigan,US</td>
                    <td>+1 202 555 0134</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />Reginld Brown</td>
                    <td>drhyde@gmail.com</td>
                    <td>Entrimo,Spain</td>
                    <td>+1 202 555 0153</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>

                <tr>
                    <td className=''>
                        <img className='h-10 w-10 rounded-full inline-block' src="https://images.unsplash.com/photo-1592511949381-4ef6480a09d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWxzfGVufDB8fDB8fHww" alt="" />stacey Smith</td>
                    <td>mai@gmail.com</td>
                    <td>Lublin,Poland</td>
                    <td>+1 202 555 0115</td>
                    <td><button className='border border-blue-500 py-2 px-4 mt-2 rounded-md'>Edit</button> <button className='border border-pink-500 py-2 px-4 mt-2 rounded-md'>Delete</button></td>
                </tr>
                <div></div>
            </table>
        </div>

    )
}

export default Todolist



