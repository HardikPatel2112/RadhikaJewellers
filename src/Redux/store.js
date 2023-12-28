import customersApi from 'src/api/customersApi';
import { customersReducer } from './slice/CustomerSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    //setup reducer
    customerStore: customersReducer,
    [customersApi.reducerPath]: customersApi.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(customersApi.middleware)

});

//export rootstste
export default store.getState();

