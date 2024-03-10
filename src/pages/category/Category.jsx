import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, search } from '../../feature/category/categorySlice';


const Category = () => {

  const categories = useSelector(state => state.category.category)
  const sidebar = useSelector(state => state.sidebar.sidebar)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handelsubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ id: Date.now(), name: name, image: image }))
    setImage('')
    setName('')
  }

  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className={sidebar ? `md:w-[20%] hidden w-full` : `block w-full md:w-[20%]`}>
        <Sidebar />
      </div>
      <div className={sidebar ? 'dark:bg-slate-900  w-full min-h-screen p-2' : ' dark:bg-slate-900 md:w-[80%] w-full min-h-screen p-2'}>

        <div className='my-10 border-dashed border-2 border-gray-400 p-4'>
          <form className='flex flex-wrap gap-2 w-full items-center' onSubmit={handelsubmit}>
            <div className='w-full'>
              <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="name">Category Type:</label>
              <br />
              <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="text" placeholder='Enter name of category' id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div >
            <div className='w-full'>
              <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="url">Iamge URL:</label>
              <br />
              <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="text" placeholder='Enter image url' id='url'
                value={image}
                onChange={(e) => setImage(e.target.value.trim())}
              />
            </div>
            <div className='mt-4'>
              <button className="py-2 px-5 bg-[#FA869B] text-white font-semibold rounded-full shadow-md hover:bg-[#d04d65] focus:outline-none focus:ring focus:ring-[#FA869B] focus:ring-opacity-75">
                Add Category
              </button>
            </div>
          </form>
        </div>
        <div>
          <input className="float-right	my-2 boredr-2 border-gray-400 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800 " type="text" placeholder='search...'
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </div>
        <div className=' w-full overflow-x-auto '>
          <table className="table-auto oveflow-x-scroll  w-full  ">
            <thead >
              <tr className='border-solide border-gray-100 border-2 text-gray-700 text-md font-semibold dark:text-white p-4'>
                <th className='py-2'> Category ID</th>
                <th>Image</th>
                <th className='py-2'>Name</th>

                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-gray-600 text-md dark:text-white center capitalize whitespace-nowrap'>
              {
                categories.map((category) => (
                  <tr className='border-solide border-gray-100 border-2 space-y-3 text-center border-spacing-y-1w-full table-row ' key={category.id} >
                    <td>{category.id}</td>
                    <td className='flex justify-center'><img className='w-10 h-10 rounded-full object-cover' src={category.image} alt={category.name} /></td>
                    <td>{category.name}</td>
                    <td className='text-2xl font-semibold text-sky-600 cursor-pointer'><FaEdit /></td>
                    <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete
                      onClick={() => dispatch(deleteCategory(category.id))}
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

export default Category