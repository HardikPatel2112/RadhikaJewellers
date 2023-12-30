import customersApi from 'src/api/customersApi';
import { customersReducer } from './slice/CustomerSlice';
import authApi from 'src/api/authApi';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    //setup reducer
    customerStore: customersReducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [authApi.reducerPath]: authApi.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(customersApi.middleware)
  .concat(authApi.middleware)


});

//export rootstste
export default store.getState();

