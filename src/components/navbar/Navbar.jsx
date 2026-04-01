import React, { useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import user from "/src/assets/user.jpg"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='relative'>
            <div className='flex justify-between max-w-384 mx-auto py-5 md:py-10 items-center px-2 md:px-0'>

                <div className='flex gap-2 md:gap-4 items-center'>

                    <span
                        className='cursor-pointer md:hidden'
                        onClick={() => setOpenMenu(!openMenu)}
                    > {openMenu ? <AiOutlineClose size={25} /> : <IoMenu size={25} />}
                    </span>

                    <a href="#home">
                        <h3 className='text-lg md:text-2xl font-bold text-gray-700 cursor-pointer'>Auctions<span className='text-orange-500'>Gallery</span></h3>
                    </a>
                </div>

                <ul className='hidden md:flex gap-8 text-gray-700 cursor-pointer'>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Action</li>
                    </a>
                    <a href="">
                        <li>Categories</li>
                    </a>
                    <a href="">
                        <li>How to works</li>
                    </a>
                </ul>

                <div className='flex gap-2 md:gap-4 items-center h-10 border-box'>

                    <button className='bg-gray-200 p-2 md:p-4 rounded-full relative'>
                        <span className='absolute right-2 top-2 bg-gray-700 text-white text-xs md:text-sm w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center'>5</span>
                        <IoMdNotificationsOutline size={25} />
                    </button>

                    <img className='w-10 md:w-14 rounded-full' src={user} alt="" />
                </div>
            </div>

            {/* //Mobile menu */}
            {
                openMenu && (
                    <div className='md:hidden fixed w-full h-screen z-50 inset-0 bg-black/60'
                        onClick={() => setOpenMenu(false)}>

                        <div className='bg-white w-64 h-screen p-6 space-y-6'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div>
                                <AiOutlineClose size={25}
                                className='cursor-pointer'
                                onClick={()=>setOpenMenu(false)} />
                            </div>

                            <ul className='space-y-4 text-gray-700 font-medium'>
                                <a href="">
                                    <li className='p-3' onClick={()=>setOpenMenu(false)}>Home</li></a>
                                <a href="">
                                    <li className='p-3' onClick={()=>setOpenMenu(false)}>Action</li></a>
                                <a href="">
                                    <li className='p-3' onClick={()=>setOpenMenu(false)}>Categories</li></a>
                                <a href="">
                                    <li className='p-3' onClick={()=>setOpenMenu(false)}>How to works</li></a>
                            </ul>
                        </div>


                    </div>
                )
            }
        </div>
    );
};

export default Navbar;