import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div><Navbar /></div>

            <h1 className=''>this is contact page</h1>
            <Link className="link" to="C1">C1</Link>
            <Link className="link" to="C2">C2</Link>
            <Link className="link" to="C3">C3</Link>
            <Outlet></Outlet>


        </div>
    )
}

export default Contact
