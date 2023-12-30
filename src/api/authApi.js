import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 const authApi = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rjkapadwanj.bsite.net/api/" }),
  prepareHeaders: (headers, api) => {
    headers.append("Access-Control-Allow-Origin","*");
    return headers;
  },  
  endpoints: (builder) => ({     
    Login: builder.mutation({
      query: (loginmodel) => ({
        url: "auth/login",
        method: "POST",
        body: loginmodel,
      })
    }), 
    Register: builder.mutation({
        query: (registermodel) => ({
          url: "auth/register",
          method: "POST",
          body: registermodel,
        })
      }),
    
  }),
});

//for Get request i.e for query export action method by use + methodname +Query
export const {useLoginMutation,useRegisterMutation} = authApi;
export default authApi;



