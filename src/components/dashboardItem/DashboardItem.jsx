import React from 'react'

const DashboardItem = ({ item }) => {
  return (
    <div className=' [150px] md:w-[180px] w-[160px] flex justify-center items-center flex-col shadow boredr-gray-100 border-2 border-solid rounded p-4'>
      <div className={`rounded-full ${item.text} ${item.bg} p-4`}>
        <item.icon className="text-xl " />
      </div>
      <p className='text-md font-semibold text-gray-600 dark:text-white'>{item.revenue}</p>
      <p className='text-sm font-semibold text-gray-500 capitalize dark:text-white'>{item.title}</p>
    </div>
  )
}

export default DashboardItem