import { createSlice } from "@reduxjs/toolkit";

const initialState={
  size:[]
}

export const sizeSlice=createSlice({
  name:'size',
  initialState,
  reducers:{
    addSize:(state,action)=>{
      console.log(action.payload);
      state.size=[...state.size,action.payload]
    },
    removeSize:(state,action)=>{
      state.size=state.size.filter(size=>size!== action.payload)
    }
  }
})

export const {addSize,removeSize}=sizeSlice.actions

export default sizeSlice.reducer