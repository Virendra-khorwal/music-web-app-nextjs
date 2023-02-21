
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const xRapidApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xRapidApiKey);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getExplore: builder.query({
      query: () => "/v1/charts/country?country_code=IN",
    }),
    getTopChart: builder.query({
      query: () => "top_200_tracks",
    }),
    getTopCountryChart: builder.query({
      query: (country) => `top_200_tracks?country=${country}`,
    }),
  }),
});

export const { useGetExploreQuery, useGetTopChartQuery, useGetTopCountryChart } =
  shazamCoreApi;