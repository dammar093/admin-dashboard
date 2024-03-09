import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdOutlinePerson4, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Order = () => {
  const orders = [
    {
      id: 1,
      name: 'Dyams',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120

        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120

        }
      ],
      method: 'e-sewa',
      payment: true,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: '123234355435',
      oredr: false,
      contact: '9809498493'
    },
    {
      id: 2,
      name: 'hari',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },

      ],
      method: 'e-sewa',
      payment: false,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: 'xxsdshjjk12',
      order: true,
      contact: '9809498493'
    },
    {
      id: 3,
      name: 'hari',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },

      ],
      method: 'e-sewa',
      payment: false,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: 'xxsdshjjk12',
      order: true,
      contact: '9809498493'
    },
    {
      id: 4,
      name: 'hari',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },

      ],
      method: 'e-sewa',
      payment: false,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: 'xxsdshjjk12',
      order: true,
      contact: '9809498493'
    },
    {
      id: 5,
      name: 'hari',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },

      ],
      method: 'e-sewa',
      payment: false,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: 'xxsdshjjk12',
      order: true,
      contact: '9809498493'
    },
    {
      id: 6,
      name: 'hari',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: [
        {
          id: 1,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },
        {
          id: 2,
          name: 'shirt',
          quantity: 2,
          image: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600',
          price: 120
        },

      ],
      method: 'e-sewa',
      payment: false,
      address: 'laljhasi-04 ,Kanchanpur',
      acc: 'xxsdshjjk12',
      order: true,
      contact: '9809498493'
    },

  ]
  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className='md:w-[20%] hidden md:block'>
        <Sidebar />
      </div>
      <div className='min-h-screen dark:bg-slate-900 md:w-[80%] w-full  p-4'>
        <input className="float-right	my-2 boredr-2 border-gray-600 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800 " type="text" placeholder='search...' />
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
                    <td className='text-sm'>{order.payment ? <span className='bg-green-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>delevered</span> : <span className='bg-red-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>pending</span>}</td>
                    <td className='text-sm'>{order.order ? <span className='bg-green-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>delevered</span> : <span className='bg-red-300 text-gray-700 dark:text-white px-2 rounded-xl cursor-pointer'>pending</span>}</td>
                    <td>{order.acc}</td>
                    <td>{order.contact}</td>
                    <td>{order.products.reduce((total, product) => {
                      return total + (product.price * product.quantity);
                    }, 0)}</td>
                    <td className='text-2xl font-semibold text-sky-400'><Link to="#"><FaEye /></Link></td>
                    <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete /> </td>
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