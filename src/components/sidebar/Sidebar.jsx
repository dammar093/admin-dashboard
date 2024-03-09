import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { MdOutlineProductionQuantityLimits, MdOutlineCategory, MdOutlineBorderColor } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";



const Sidebar = () => {
  return (
    <aside className='h-screen  z-10 dark:bg-slate-900 fixed top-16 left-0 shadow-xl '>
      <div>
        <div className='m-2 p-2'>
          <NavLink to="/" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase hover:bg-[#FA869B] hover:text-white hover:rounded-xl")} > <RxDashboard /> Dashboard</NavLink>
        </div>
        <div className='m-2 p-2'>
          <NavLink to="/category" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase  hover:bg-[#FA869B] hover:text-white  hover:rounded-xl")} > <MdOutlineCategory /> Category</NavLink>
        </div>
        <div className='m-2 p-2'>
          <NavLink to="/products" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase  hover:bg-[#FA869B] hover:text-white  hover:rounded-xl")} > <MdOutlineProductionQuantityLimits />products</NavLink>
        </div>
        <div className='m-2 p-2'>
          <NavLink to="/order" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase  hover:bg-[#FA869B] hover:text-white  hover:rounded-xl")} > <MdOutlineBorderColor /> orders</NavLink>
        </div>
        <div className='m-2 p-2'>
          <NavLink to="/transaction" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase  hover:bg-[#FA869B] hover:text-white  hover:rounded-xl")} > <GiTakeMyMoney /> Transactions</NavLink>
        </div>
        <div className='m-2 p-2'>
          <NavLink to="/user" className={(({ isActive }) => isActive ? "bg-[#FA869B] text-white text-l font-semibold p-2 flex rounded-xl gap-2 items-center uppercase" : "flex gap-2 text-l font-semibold items-center dark:text-white text-gray-700 p-2 rounded-lg uppercase  hover:bg-[#FA869B] hover:text-white  hover:rounded-xl")} > <LuUsers /> user</NavLink>
        </div>


      </div>
    </aside>
  )
}

export default Sidebar