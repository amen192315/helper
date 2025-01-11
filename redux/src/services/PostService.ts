import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/posts',
      }),
    }),
  }),
});
