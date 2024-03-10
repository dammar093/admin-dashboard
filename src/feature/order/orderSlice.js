import { createSlice } from "@reduxjs/toolkit";

const initialState={
  order:[
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
}

export const orderSlice = createSlice({
  name:'order',
  initialState,
  reducers:{
    deleteOrder:(state,action)=>{
        state.order=state.order.filter(order=>order.id !== action.payload)
    },
    search:(state,action)=>{
      if(action.payload===''){
        return state
       }
       else {
       const searchItems = action.payload.toLowerCase(); 
       state.order= state.order.filter(item => item.name.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase().trim()))
       }
    },
    editOrder:(state,action)=>{

    }
  }
})

export const {deleteOrder,editOrder,search} = orderSlice.actions

export default orderSlice.reducer