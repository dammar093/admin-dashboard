import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdOutlinePerson4, MdDelete } from "react-icons/md";

const User = () => {
  const users = [
    {
      id: 1,
      name: 'Dymas',
      address: 'Laljhadi 04,Danga Jain, Kanchanpur',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      payment: 12000,
      active: true,
      lastActive: new Date().getMinutes().toLocaleString()
    },
    {
      id: 2,
      name: 'Ruhi',
      address: 'Laljhadi 04,Danga Jain, Kanchanpur',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
      payment: 12000,
      active: true,
      lastActive: new Date().getMinutes().toLocaleString()
    },
    {
      id: 3,
      name: 'Juli',
      address: 'Laljhadi 04,Danga Jain, Kanchanpur',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      payment: 12000,
      active: false,
      lastActive: new Date().getMinutes().toLocaleString()
    },
    {
      id: 4,
      name: 'Juli',
      address: 'Laljhadi 04,Danga Jain, Kanchanpur',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      payment: 12000,
      active: false,
      lastActive: new Date().getMinutes().toLocaleString()
    },
    {
      id: 5,
      name: 'Juli',
      address: 'Laljhadi 04,Danga Jain, Kanchanpur',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      payment: 12000,
      active: false,
      lastActive: new Date().getMinutes().toLocaleString()
    },

  ]
  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className='md:w-[20%] hidden md:block'>
        <Sidebar />
      </div>
      <div className='min-h-screen dark:bg-slate-900 md:w-[80%] w-full p-2 mt-4'>

        <input className="float-right	my-2 boredr-2 border-gray-600 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800" type="text" placeholder='search...' />
        <table className="table-auto overflow-x-auto w-full p-2 ">
          <thead>
            <tr className='border-solide border-gray-100 border-2 text-gray-700 text-md font-semibold dark:text-white p-4'>
              <th className='py-2'>id</th>
              <th className='py-2'><MdOutlinePerson4 /></th>
              <th className='py-2'>Name</th>
              <th className='py-2'>Address</th>
              <th className='py-2'>Total Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-gray-600 text-md dark:text-white center capitalize'>
            {
              users.map((user) => (
                <tr className='border-solide border-gray-100 border-2 space-y-3 text-center border-spacing-y-1w-full' key={user.id} >
                  <td>{user.id}</td>
                  <td className='col py-2'><img className='w-10 h-10 rounded-full object-cover' src={user.avatar} alt={user.name} /></td>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>Rs. {user.payment}</td>
                  <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete /></td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div >
  )
}

export default User