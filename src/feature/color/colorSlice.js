import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  color:[]
}

export const colorSlice=createSlice({
  name:'color',
  initialState,
  reducers:{
    addColor:(state,action)=>{
      state.color=[...state.color,action.payload]
    },
    removeColor:(state,action)=>{
      state.color=state.color.filter(color=>color !== action.payload)
    }
  }
})

export const {addColor,removeColor} = colorSlice.actions

export default colorSlice.reducer