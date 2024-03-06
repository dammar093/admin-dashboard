import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false)
  return (
    <div className='bg-[#FA869B] w-full h-16 flex justify-between items-center p-4'>
      <div><span className='text-3xl text-white font-semibold line-through font-[cursive] uppercase'><Link to="/">Dayms</Link></span></div>
      <div>
        <div className='flex items-center gap-1 relative'>
          <img className='w-12 h-12 rounded-full  shadow-2xl shadow-slate-500/50 border-2 border-white border-solid cursor-pointer' src="https://media.licdn.com/dms/image/D4D35AQFP6-EF9PC1lg/profile-framedphoto-shrink_400_400/0/1708596180799?e=1710327600&v=beta&t=A7LNXqkbKGmp2uXzBeR5UAXhWnFVxLVOFAMv1TRpShE" alt="" onClick={() => setShowProfile(prev => !prev)} />
          <span className='text-white text-l font-semibold capitalize'>Hello Dyams</span>
          {
            showProfile && <div className='bg-white shadow 2xl w-[200px] h-[100px] absolute top-14 right-0 p-2 flex justify-center items-center flex-col '>
              <div className='mt-2'>
                <Link to="profile" className='flex justify-center items-center text-slate-500 text-l uppercase font-semibold hover:text-[#FA869B]' onClick={() => setShowProfile(false)}><FaRegUser /> <span>your profile</span></Link>
              </div>
              <div className='my-4'>
                <button class="py-2 px-5 bg-[#FA869B] text-white font-semibold rounded-full shadow-md hover:bg-[#d04d65] focus:outline-none focus:ring focus:ring-[#FA869B] focus:ring-opacity-75">
                  Logout
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar