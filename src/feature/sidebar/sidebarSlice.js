import { createSlice } from "@reduxjs/toolkit";

const initialState={
  sidebar:true,
}

export const sidebarSlice=createSlice({
  name:'sidebar',
  initialState,
  reducers:{
    toggleSidebar:(state,action)=>{
      state.sidebar=action.payload
    }
  }
})

export const {toggleSidebar} = sidebarSlice.actions

export default sidebarSlice.reducer