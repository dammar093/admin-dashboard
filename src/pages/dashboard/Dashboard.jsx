import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import cart from '../../assets/cart.png'
import { TfiMoney } from "react-icons/tfi";
import { FaCubesStacked } from "react-icons/fa6";
import { FaCarSide, FaSitemap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PiUsersFourFill } from "react-icons/pi";
import { MdCategory } from "react-icons/md";
import DashboardItem from '../../components/dashboardItem/DashboardItem';



const Dashboard = () => {

  const data = [
    {
      id: 1,
      title: 'total revenue',
      revenue: 1200.00,
      icon: TfiMoney,
      text: 'text-sky-400',
      bg: 'bg-sky-100'
    },
    {
      id: 2,
      title: 'total orders',
      revenue: 1200,
      icon: FaCubesStacked,
      text: 'text-violet-400',
      bg: 'bg-violet-100'
    },
    {
      id: 3,
      title: 'deleiverd',
      revenue: 1200,
      icon: FaCarSide,
      text: 'text-green-400',
      bg: 'bg-green-100'
    },
    {
      id: 4,
      title: 'cancelled',
      revenue: 120,
      icon: RxCross2,
      text: 'text-red-400',
      bg: 'bg-red-100'
    },
    {
      id: 5,
      title: 'total users',
      revenue: 1200,
      icon: PiUsersFourFill,
      text: 'text-pink-400',
      bg: 'bg-pink-100'
    },
    {
      id: 6,
      title: 'total products',
      revenue: 1200,
      icon: FaSitemap,
      text: 'text-teal-400',
      bg: 'bg-teal-100'
    },
    {
      id: 7,
      title: 'total category',
      revenue: 12,
      icon: MdCategory,
      text: 'text-rose-400',
      bg: 'bg-rose-100'
    },

  ]
  return (
    <div className='dark:bg-slate-900 flex w-full justify-between p-4'>
      <div className='md:w-[20%] hidden md:block'>
        <Sidebar />
      </div>
      <div className=' dark:bg-slate-900 md:w-[80%] w-full'>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 w-full mt-4 flex justify-between rounded ">
          <div>
            <div className='md:w-3/4 w-full '>
              <h2 className='text-white text-xl font-semibold'>WELCOME TO DYAMS🎉</h2>

              <p className='text-white text-sm font-semibold my-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nisi non explicabo eveniet eaque magnam ut, tempore officia facilis ipsum.</p>
              <button className="py-2 px-5 bg-[#FA869B] text-white font-semibold rounded-full shadow-md-md hover:bg-[#d04d65] focus:outline-none focus:ring focus:ring-[#FA869B] focus:ring-opacity-75">
                Take a Product
              </button>
            </div>
          </div>
          <div className='w-1/4 md:block hidden'>
            <img className='w-full h-[100%] object-cover' src={cart} alt="" />
          </div>
        </div>
        <div className='flex  gap-2 justify-between  md:gap-5 md:justify-stretch  flex-wrap mt-4'>
          {
            data.map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard