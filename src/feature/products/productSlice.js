import { createSlice } from "@reduxjs/toolkit";

const initialState={
  products:[
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
      name: 'sweeter',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/16154671/pexels-photo-16154671/free-photo-of-woman-with-long-hair-smiling.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'aweeyer',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 3,
      name: 'sari',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sari',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    },
    {
      id: 4,
      name: 'shirt',
      oldPrice: 120,
      quantity: 100,
      image: 'https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/5119522/pexels-photo-5119522.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/1572348/pexels-photo-1572348.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
      discount: 10,
      size: ['m', 'xl'],
      color: ['white', 'black']
    }
  ]
}

export const productsSlice=createSlice({
  name:'products',
  initialState,
  reducers:{
      addProduct:(state,action)=>{
        state.products=[...state.products,action.payload]
      },
      removeProduct:(state,action)=>{
        state.products=state.products.filter(product=>product.id !== action.payload)
      },
      search:(state,action)=>{
       if(action.payload===''){
        return state
       }
       else{
       const searchItems = action.payload.toLowerCase(); 
       state.products= state.products.filter(item => item.name.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase().trim()))
      }
     }
  }

})

export const {addProduct,removeProduct,search}= productsSlice.actions

export default productsSlice.reducer