import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleNav = () => {
        setToggle(!toggle)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-2xl font-bold green-text'>REACT.</h1>

            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                { toggle ? <AiOutlineClose size={20} className='w-[25px]'/> : <AiOutlineMenu size={20}/>}
            </div>

            {/* mobile menu */}
            <div className={`${ toggle ? "left-0" : 'left-[-100%]' } duration-300 ease-in-out fixed top-24 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]`}>
                <ul className='px-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar