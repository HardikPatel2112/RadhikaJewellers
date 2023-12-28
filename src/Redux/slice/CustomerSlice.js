import { createSlice } from '@reduxjs/toolkit';
import {current } from '@reduxjs/toolkit'

const initialState = {
  customers: [],
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    // all actions defined here
    SetCustomers: (state, action) => {

      state.customers = action.payload;
    },
    AddCustomers: (state, action) => {
     let currentstate= current(state.customers);
      state.customers = [...currentstate, action.payload];
    },
    UpdateCustomer: (state, action) => {
      let currentstate= current(state.customers);
      state.customers = currentstate.map(cust => {
        if (cust.id === action.payload.id) {
          return action.payload;
        }
        return cust;
      });
    },
  },
});

export const { SetCustomers, AddCustomers, UpdateCustomer } = customersSlice.actions;
export const customersReducer = customersSlice.reducer;
