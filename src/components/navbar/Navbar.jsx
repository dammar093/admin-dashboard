import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { darkMode, lightMode } from '../../feature/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../feature/sidebar/sidebarSlice';
import image from '../../assets/dyM.jpg'

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const dispatch = useDispatch()

  const themeMode = useSelector(state => state.themeMode.themeMode)
  const sidebar = useSelector(state => state.sidebar.sidebar)


  const handelLightMode = (e) => {
    e.stopPropagation()
    dispatch(lightMode('dark'))
    setIsDark(prev => !prev)
  }

  const handelDarkMode = (e) => {
    e.stopPropagation()
    dispatch(darkMode('light'))
    setIsDark(prev => !prev)
  }
  // actual change in theme

  useEffect(() => {
    // console.log(themeMode);
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode)
  }, [handelDarkMode, handelLightMode])


  return (
    <header className='bg-[#FA869B] w-full h-16 flex justify-between items-center p-4 sticky top-0 z-10'>
      <div>
        {
          sidebar ? <MdMenu className='text-3xl font-semibold text-white cursor-pointer ' onClick={() => dispatch(toggleSidebar(false))} /> : <MdClose className='text-3xl font-semibold text-white cursor-pointer ' onClick={() => dispatch(toggleSidebar(true))} />
        }
      </div>
      <div>
        <div className=' relative flex items-center gap-2'>
          <div className={`w-16 h-8 flex items-center  rounded-full px-1 shadow-inner ${!isDark ? 'bg-slate-800' : 'bg-white'}`}  >
            {
              !isDark ? <CiDark className='text-3xl text-white  translate-x-7 cursor-pointer' onClick={handelDarkMode} /> : <CiLight className='text-3xl text-gray-700  cursor-pointer' onClick={handelLightMode} />
            }
          </div>
          <div className='flex items-center'>
            <img className='w-12 h-12 rounded-full  shadow-2xl shadow-slate-500/50 border-2 border-white border-solid cursor-pointer' src={image} alt="" onClick={() => setShowProfile(prev => !prev)} />
            <MdKeyboardArrowDown className='text-white text-l font-semibold' />
            <span className='text-white text-l font-semibold capitalize'>Hello Dyams</span>
          </div>
          {
            showProfile && <div className='bg-white shadow 2xl w-[200px] h-[100px] absolute top-14 right-0 p-2 flex justify-center items-center flex-col dark:bg-slate-900'>
              <div className='mt-2'>
                <Link to="profile" className='flex justify-center items-center text-slate-500 text-l uppercase font-semibold hover:text-[#FA869B] dark:text-white' onClick={() => setShowProfile(false)}><FaRegUser /> <span>your profile</span></Link>
              </div>

              <div className='my-4'>
                <button className="py-2 px-5 bg-[#FA869B] text-white font-semibold rounded-full shadow-md hover:bg-[#d04d65] focus:outline-none focus:ring focus:ring-[#FA869B] focus:ring-opacity-75">
                  Logout
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </header >
  )
}

export default Navbar