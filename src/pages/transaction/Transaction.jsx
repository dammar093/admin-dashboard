import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { useSelector } from 'react-redux'

const Transaction = () => {
  const sidebar = useSelector(state => state.sidebar.sidebar)
  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className={sidebar ? `md:w-[20%] hidden w-full` : `block w-full md:w-[20%]`}>
        <Sidebar />
      </div>
      <div className={sidebar ? 'dark:bg-slate-900  w-full min-h-screen p-2' : ' dark:bg-slate-900 md:w-[80%] w-full min-h-screen p-2'}>

      </div>
    </div>
  )
}

export default Transaction