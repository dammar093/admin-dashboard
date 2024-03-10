import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdOutlinePerson4, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, search } from '../../feature/user/userSlice';

const User = () => {
  const users = useSelector(state => state.user.user);
  const sidebar = useSelector(state => state.sidebar.sidebar);
  const dispatch = useDispatch()
  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className={sidebar ? `md:w-[20%] hidden w-full` : `block w-full md:w-[20%]`}>
        <Sidebar />
      </div>

      <div className={sidebar ? 'dark:bg-slate-900  w-full min-h-screen p-2' : ' dark:bg-slate-900 md:w-[80%] w-full min-h-screen p-2'}>

        <input className="float-right	my-2 boredr-2 border-gray-400 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800" type="text" placeholder='search...'
          onChange={(e) => dispatch(search(e.target.value))}
        />
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
                  <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete
                    onClick={() => dispatch(deleteUser(user.id))}
                  /></td>
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