import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, search, addProduct } from '../../feature/products/productSlice';
import { IoIosAddCircle, IoMdClose } from "react-icons/io";
import { addImage, removeImage } from '../../feature/image/imageSlice';
import { addColor, removeColor } from '../../feature/color/colorSlice';
import { addSize, removeSize } from '../../feature/size/sizeSlice';


const Products = () => {
  const products = useSelector(state => state.products.products)
  console.log(products);
  const dispatch = useDispatch()
  const [url, setUrl] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [cate, setCate] = useState('')

  const image = useSelector(state => state.image.image)
  const colors = useSelector(state => state.color.color)
  const sizes = useSelector(state => state.size.size)
  const category = useSelector(state => state.category.category)

  const handelImage = () => {
    dispatch(addImage(url))
    setUrl('')
    console.log('hello');
  }
  const handelColor = () => {
    dispatch(addColor(color))
    setColor('')
  }
  const handelSize = () => {
    dispatch(addSize(size))
    setSize('')
  }

  const handelProducts = (e) => {
    e.preventDefault()
    console.log(cate);
    dispatch(addProduct({ id: Date.now(), name: name, oldPrice: Number(price), quantity: Number(quantity), image: image, category: cate, discount: Number(discount), size: sizes, color: colors }))
  }

  return (
    <div className='dark:bg-slate-900 flex w-full'>
      <div className='md:w-[20%] hidden md:block'>
        <Sidebar />
      </div>
      <div className='min-h-screen dark:bg-slate-900 md:w-[80%] w-full  p-4'>
        <div className='my-10 border-dashed border-2 border-gray-400 p-4'>
          <form className='flex flex-wrap gap-2 w-full items-center' onSubmit={handelProducts}>
            <div className='w-full flex items-center gap-1 '>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="name">Product Name:</label>
                <br />
                <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="text" placeholder='Enter name of product' id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="category" className='text-md text-gray-600 text-md font-semibold dark:text-white'>Category</label>
                <br />
                <select name="" id="category" className='w-full text-gray-600 font-semibold dark:bg-slate-900 dark:text-white capitalize px-2 py-1 border-2 borer-solid border-gray-300 rounded'
                  value={cate}
                  onChange={(e) => setCate(e.target.value)}
                >
                  {
                    category.map(category => (
                      <option value={category.name} key={category.id} className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 text-md capitalize dark:text-white dark:bg-slate-900'>{category.name}</option>
                    ))
                  }
                </select>
              </div>
            </div >
            <div className='w-full flex gap-1 items-center'>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="url">Iamge URL:</label>
                <br />
                <div className='m-2 flex gap-2'>
                  {
                    image.map(image => (
                      <div className='flex items-center w-20 h-10 rounded-full border-solied border-2 border-gray-300 justify-between' key={image}>
                        <img className="w-10 h-10 rounded-full" src={image} alt={image} />
                        <IoMdClose className='text-2xl font-semibold text-red-600  cursor-pointer' onClick={() => dispatch(removeImage(image))} />
                      </div>
                    ))
                  }

                </div>
                <div className='flex items-center'>
                  <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-[95%]' type="text" placeholder='Enter image url' id='url'
                    value={url}
                    onChange={(e) => setUrl(e.target.value.trim())}
                  />
                  <IoIosAddCircle className='text-3xl text-gray-600 dark:text-white font-semibold cursor-pointer' onClick={handelImage} />
                </div>
              </div>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="quantity">Product Quantity:</label>
                <br />
                <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="number" placeholder='Enter name of product' id='quantity'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className='w-full flex gap-1 items-center'>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="color">Colors:</label>
                <br />
                <div className='m-2 flex gap-2'>
                  {
                    colors.map(clr => (
                      <div className='w-15 h-8 flex items-center justify-between border-solid border-2 border-gray-300 rounded-full ' key={clr}>
                        <span className={` w-5 h-5 rounded-full`} style={{ backgroundColor: `${clr}` }}></span>
                        <IoMdClose className='text-2xl text-red-600  font-semibold cursor-pointer' onClick={() => dispatch(removeColor(clr))} />
                      </div>
                    ))
                  }
                </div>
                <div className='flex items-center'>
                  <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-[95%]' type="text" placeholder='Enter color' id='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value.toLowerCase().trim())}
                  />
                  <IoIosAddCircle className='text-3xl text-gray-600 dark:text-white font-semibold cursor-pointer' onClick={handelColor} />
                </div>
              </div>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="size">Size:</label>
                <br />
                <div className='m-2 flex gap-2'>
                  {
                    sizes.map(sz => (
                      <div key={sz} className='flex items-center justify-between w-20  h-8 rounded-full border-2 border-gray-300 border-solid px-1'>
                        <span className='text-gray-600 font-semibold text-md uppercase dark:text-white '>{sz}</span>
                        <IoMdClose className='text-2xl text-red-600 font-semibold cursor-pointer' onClick={() => dispatch(removeSize(sz))} />
                      </div>
                    ))
                  }

                </div>
                <div className='flex items-center'>
                  < input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-[95%]' type="text" placeholder='Enter size' id='size'
                    value={size}
                    onChange={(e) => setSize(e.target.value.trim())}
                  />
                  <IoIosAddCircle className='text-3xl text-gray-600 dark:text-white font-semibold cursor-pointer' onClick={handelSize} />
                </div>
              </div>
            </div>

            <div className='w-full flex gap-1'>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="price">Price:</label>
                <br />
                <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="number" placeholder='Enter price of product' id='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='w-1/2'>
                <label className='text-gray-500 dark:text-white text-md font-semibold m-1' htmlFor="discount">Discount:</label>
                <br />
                <input className='border-solid  border-2 border-gray-400 px-2 py-1 rounded text-gray-600 dark:text-white dark:bg-slate-900 w-full' type="number" placeholder='Enter discount %  of product' id='discount'
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </div >

            <div className='mt-4'>
              <button className="py-2 px-5 bg-[#FA869B] text-white font-semibold rounded-full shadow-md hover:bg-[#d04d65] focus:outline-none focus:ring focus:ring-[#FA869B] focus:ring-opacity-75">
                Add Product
              </button>
            </div>
          </form>
        </div>
        <div>

          <input className="float-right	my-2 boredr-2 border-gray-600 px-4 py-1 rounded  dark:text-white text-gray-600 border-2 border-solid dark:bg-slate-800 " type="text" placeholder='search...'

            onChange={(e) => dispatch(search(e.target.value))}
          />
        </div>
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
                    <td><img className='w-10 h-10 rounded-full object-cover' src={product.image[0]} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.size.map(size => (<span key={size}>{size} </span>))}</td>
                    <td className='flex items-center justify-center'>{product.color.map((color) => (<span key={color} style={{ backgroundColor: `${color}` }} className='w-5 h-5 rounded-full border-solid border-2 border-gray-300'> </span>))}</td>
                    <td>{product.quantity}</td>
                    <td>Rs.{product.oldPrice}</td>
                    <td>Rs.{product.oldPrice - (product.discount * 100 / product.oldPrice).toFixed(2)}</td>
                    <td>{product.discount}%</td>
                    <td className='text-2xl font-semibold text-sky-600 cursor-pointer'><FaEdit /></td>
                    <td className='text-2xl text-red-600 font-semibold cursor-pointer'><MdDelete
                      onClick={() => dispatch(removeProduct(product.id))}
                    /> </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div >
    </div >
  )
}

export default Products