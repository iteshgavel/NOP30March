import {createSlice} from '@reduxjs/toolkit'
const contentSlice=createSlice(
    {
        name:"displayedCandidate",
        initialState:[],
        reducers:{
         setContent:(state,action)=>{
            return action.payload.content
         }
        }
    }
)
export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;