import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//!you can make diffrent-diffrent more interface as per Api repsoce for fetch value using keys
interface ProductPrototype {
  id: number | string;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number | string;
  rating: number | string;
  stock: number | string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

//!you can change header as per your requirment
const headers = {'Content-Type': 'application/json'};
const multiPartFileHeader = {
  'Content-Type': 'multipart/form-data',
};

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
  endpoints: builder => ({
    //!GETMETHOD
    getAllProducts: builder.query<ProductPrototype[], void>({
      query: () => ({
        url: 'users?page=2',
        headers: headers,
        method: 'GET',
      }),
    }),
    //!POSTMETHOD
    getNameWiseProductQuary: builder.query<ProductPrototype[], {bodyJson: any}>(
      {
        query: bodyJson => ({
          url: 'users',
          method: 'POST',
          headers: headers,
          body: JSON.stringify(bodyJson),
        }),
      },
    ),
    //!multipart/form-data
    passImageWithMultiPartQuery: builder.query<
      ProductPrototype[],
      {bodyJson: any}
    >({
      query: formData => ({
        url: 'users',
        method: 'POST',
        headers: multiPartFileHeader,
        body: formData,
      }),
    }),
    //!POSTMETHOD [if you want change any data]
    getNameWiseProduct: builder.mutation({
      query: bodyJson => ({
        url: 'users',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyJson),
      }),
    }),
    //!multipart/form-data [if you want change any data]
    passImageWithMultiPart: builder.mutation({
      query: formData => ({
        url: 'users',
        method: 'POST',
        headers: multiPartFileHeader,
        body: formData,
      }),
    }),
  }),
});

//! Export hooks for usage in functional components, which are
//! auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetNameWiseProductMutation,
  usePassImageWithMultiPartMutation,
  useGetNameWiseProductQuaryQuery,
  usePassImageWithMultiPartQueryQuery,
} = apiService;
