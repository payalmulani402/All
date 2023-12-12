import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <nav className=''>
                    <ul className='flex justify-around bg-purple-600 p-8'>
                        <li>
                            <Link className='underline text-white text-5xl' to="/">home</Link>
                        </li>
                        <li>
                            <Link className='underline text-white text-5xl' to="/about">about</Link>
                        </li>
                        <li>
                            <Link className='underline text-white text-5xl' to="/product">product</Link>
                        </li>
                        <li>
                            <Link className='underline text-white text-5xl' to="/contact">contact</Link>
                        </li>
                        <li>
                            <Link className='underline text-white text-5xl' to="/filter">filter</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
