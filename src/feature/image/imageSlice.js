import { createSlice } from "@reduxjs/toolkit";

const initialState={
  image:[]
}


export const imageSlice=createSlice({
  name:'image',
  initialState,
  reducers:{
     addImage:(state,action)=>{
      state.image=[...state.image,action.payload]
     },
     removeImage:(state,action)=>{
      state.image=state.image.filter(image=>image!==action.payload)
     }
  }
})


export const {addImage,removeImage} = imageSlice.actions

export default imageSlice.reducer