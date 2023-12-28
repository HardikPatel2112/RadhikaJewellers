import {createSlice} from '@reduxjs/toolkit'

const initialState = () => {
    return {
        customers: [      
      ],  
    };
  };

export const customersSlice=createSlice({
    name:"customers",
    initialState:initialState,
    reducers:{
        //all actions defined here
        SetCustomers:(state,action)=>{
          state.customers=action.payload;
        },
        AddCustomers:(state,action)=>{
            state.customers=[...state.customers,action.payload]
         },
    }
})

export const {SetCustomers,AddCustomers}=customersSlice.actions;
export const customersReducer=customersSlice.reducer