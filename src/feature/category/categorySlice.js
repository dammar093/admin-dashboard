import { createSlice } from "@reduxjs/toolkit";

const initialState={
  category:[
    {
      id: 1,
      name: 'pant',

      image: 'https://images.pexels.com/photos/16296000/pexels-photo-16296000/free-photo-of-studio-shot-of-a-young-woman-in-a-white-crop-top-and-khaki-trousers-looking-over-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'pant',
    
    },
    {
      id: 2,
      name: 'shirt',

      image: 'https://images.pexels.com/photos/11035166/pexels-photo-11035166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',
    },
    {
      id: 3,
      name: 'tshirt',
      image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'tshirt',

    },
    {
      id: 4,
      name: 'sari',

      image: 'https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sari',

    },
    {
      id: 5,
      name: 'shoes',

      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'shoes',

    },
    {
      id: 6,
      name: 'sweater',

      image: 'https://images.pexels.com/photos/3845543/pexels-photo-3845543.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sweater',

    },
    {
      id: 7,
      name: 'short',

      image: 'https://images.pexels.com/photos/6604836/pexels-photo-6604836.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'short',

    },
    {
      id: 8,
      name: 'jacket',

      image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'jacket',

    }
  ]
}

export const categorySlice = createSlice({
  name:'category',
  initialState,
  reducers:{
    addCategory:(state,action)=>{

    },
    deleteCategory:(state,action)=>{
     state.category=state.category.filter(category=>category.id !== action.payload)
    },
    editCategory:(state,action)=>{

    },
    search:(state,action)=>{
      if(action.payload===''){
        return state
       }
       else{
       const searchItems = action.payload.toLowerCase(); 
       state.category= state.category.filter(item => item.name.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase().trim()))
      }
    }
  }
})

export const {addCategory,deleteCategory,editCategory,search} = categorySlice.actions

export default categorySlice.reducer