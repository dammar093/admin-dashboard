import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdOutlinePerson4, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, search } from '../../feature/order/orderSlice';


const Order = () => {
  const orders = useSelector(state => state.order.order)
  const sidebar = useSelector(state => state.sidebar.sidebar)
  // console.log(sidebar);
  const dispatch = useDispatch()

  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className={sidebar ? 'md:w-[20%] hidden w-full' : `block md:w-[20%]  w-full`}>
        <Sidebar />
      </div>
      <div className={sidebar ? 'dark:bg-slate-900  w-full min-h-screen p-2' : ' dark:bg-slate-900 md:w-[80%] w-full min-h-screen p-2'}>
        <input className="float-right	my-2 boredr-2 border-gray-400 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800 " type="text" placeholder='search...'
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <div className=' w-full overflow-x-auto '>
          <table className=" oveflow-x-scroll table-auto w-full  ">
            <thead >
              <tr className='border-solide border-gray-100 border-2 text-gray-700 text-md font-semibold dark:text-white p-4'>
                <th className='py-2'> Order ID</th>
                <th className='py-2 text-2xl'><MdOutlinePerson4 /></th>
                <th className='py-2'>Name</th>
                <th className='py-2'>Address</th>
                <th>Products</th>
                <th>Method</th>
                <th>Payment </th>
                <th>Order </th>
                <th> Account</th>
                <th>Contact</th>
                <th className='py-2'>Total </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-gray-600 text-md dark:text-white center capitalize whitespace-nowrap'>
              {
                orders.map((order) => (
                  <tr className='border-solide border-gray-100 border-2 space-y-3 text-center border-spacing-y-1w-full table-row ' key={order.id} >
                    <td>{order.id}</td>
                    <td className=' m-2'><img className='w-10 h-10 rounded-full object-cover' src={order.avatar} alt={order.name} /></td>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td className='flex '>{
                      order.products.map(product => (
                        <div className='flex items-center' key={product.id}>
                          <img className='w-10 h-10 rounded-full object-cover' src={product.image} alt={product.name} />

                        </div>
                      ))
                    }</td>
                    <td>{order.method}</td>
                    <td className='text-sm'>{order.payment ? <span className='bg-green-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>paid</span> : <span className='bg-red-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>pending</span>}</td>
                    <td className='text-sm'>{order.order ? <span className='bg-green-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>delevered</span> : <span className='bg-red-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>pending</span>}</td>
                    <td>{order.acc}</td>
                    <td>{order.contact}</td>
                    <td>Rs.{order.products.reduce((total, product) => {
                      return total + (product.price * product.quantity);
                    }, 0)}</td>
                    <td className='text-2xl font-semibold text-sky-400'><Link to="#"><FaEye /></Link></td>
                    <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete
                      onClick={() => dispatch(deleteOrder(order.id))}
                    /> </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div >
  )
}

export default Order