import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const Profile = () => {
  return (
    <div className='flex items-center'>
      <img className='w-12 h-12 rounded-full  shadow-2xl shadow-slate-500/50 border-2 border-white border-solid cursor-pointer' src="https://media.licdn.com/dms/image/D4D35AQFP6-EF9PC1lg/profile-framedphoto-shrink_400_400/0/1708596180799?e=1710327600&v=beta&t=A7LNXqkbKGmp2uXzBeR5UAXhWnFVxLVOFAMv1TRpShE" alt="" onClick={() => setShowProfile(prev => !prev)} />
      <MdKeyboardArrowDown className='text-white text-l font-semibold' />
      <span className='text-white text-l font-semibold capitalize'>Hello Dyams</span>
    </div>
  )
}

export default Profile