import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 const customersApi = createApi({
  reducerPath: "apiCustomers",
  tagTypes:["customers"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://rjkapadwanj.bsite.net/api/" }),
  prepareHeaders: (headers, api) => {
    headers.append("Access-Control-Allow-Origin","*");
    return headers;
  },
  
  endpoints: (builder) => ({   
    Customers: builder.query({
      query: () => ({
        url: "Customers",
        method: "GET"
      }), 
      providesTags:["customers"]
    }),
    AddCustomer: builder.mutation({
      query: (customer) => ({
        url: "Customers",
        method: "POST",
        body: customer,
      }), 
      invalidatesTags:["customers"]
    }),
    DeleteCustomer: builder.mutation({
      query: (id) => ({
        url: `Customers?id=${id}`,    
        method: "DELETE",     
      }), 
      invalidatesTags:["customers"]
    }),
    
  }),
});

//for Get request i.e for query export action method by use + methodname +Query
export const {useCustomersQuery,useAddCustomerMutation,useDeleteCustomerMutation} = customersApi;
export default customersApi;



