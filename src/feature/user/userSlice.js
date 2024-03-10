import { createSlice } from "@reduxjs/toolkit";

const initialState={
  user:[
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
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    deleteUser:(state,action)=>{
      state.user= state.user.filter(user=>user.id !== action.payload)
    },
    search:(state,action)=>{
      if(action.payload===''){
        return state
       }
       else{
       const searchItems = action.payload.toLowerCase(); 
       state.user= state.user.filter(item => item.name.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase().trim()))
      }
    }
  }
})

export const {deleteUser,search}=userSlice.actions

export default userSlice.reducer