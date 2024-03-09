import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'


const Products = () => {
  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className='md:w-[20%] hidden md:block'>
        <Sidebar />
      </div>
      <div className='h-screen dark:bg-slate-900 md:w-[80%] w-full'>

      </div>
    </div>
  )
}

export default Products