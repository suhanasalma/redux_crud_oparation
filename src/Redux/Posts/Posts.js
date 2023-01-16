import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => {
        return {
          url: `/posts?_limit=10`,
        };
      },
      providesTags: ["post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["post"],
    }),
    viewPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
      invalidatesTags: ["post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updateInfo }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: updateInfo,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["post"],
    }),
  }),
});


export const {useGetAllPostQuery,useAddPostMutation,useDeletePostMutation,useViewPostQuery,useUpdatePostMutation} = postApi;