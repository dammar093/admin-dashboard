import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdOutlinePerson4, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Products = () => {

  const products = [
    {
      id: 1,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 15,
      size: ['m', 'xl'],
      color: ['red', 'green']
    },
    {
      id: 2,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 3,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 4,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 5,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 6,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 7,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 8,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    }
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
                <th className='py-2'> Product ID</th>
                <th>Product</th>
                <th className='py-2'>Name</th>
                <th className='py-2'>Category</th>
                <th className='py-2'>Size</th>
                <th className='py-2'>Color</th>

                <th className='py-2'>Quantity </th>
                <th className='py-2'>Old Price </th>
                <th className='py-2'>Price</th>
                <th className='py-2'>Discount </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-gray-600 text-md dark:text-white center capitalize whitespace-nowrap'>
              {
                products.map((product) => (
                  <tr className='border-solide border-gray-100 border-2 space-y-3 text-center border-spacing-y-1w-full table-row ' key={product.id} >
                    <td>{product.id}</td>
                    <td><img className='w-10 h-10 rounded-full object-cover' src={product.image} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.size.map(size => (<span>{size}, </span>))}</td>
                    <td >{product.color.map((color) => (<span >{color}, </span>))}</td>
                    <td>{product.quantity}</td>
                    <td>{product.oldPrice}</td>
                    <td>{product.oldPrice - (product.discount * 100 / product.oldPrice).toFixed(2)}</td>
                    <td>{product.discount}%</td>
                    <td className='text-2xl font-semibold text-sky-600 cursor-pointer'><FaEdit /></td>
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

export default Products