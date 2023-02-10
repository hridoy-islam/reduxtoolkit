import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: `product/`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Product'],
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
        })
    }),
})

export const { useGetProductsQuery, usePostProductMutation, useRemoveProductMutation } = productApi