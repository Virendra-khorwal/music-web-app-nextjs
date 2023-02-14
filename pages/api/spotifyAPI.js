
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const xRapidApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xRapidApiKey);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopMonthly: builder.query({
      query: () => "/top_20_by_monthly_listeners",
    }),
    getTopChart: builder.query({
      query: () => "top_200_tracks",
    }),
    getTopCountryChart: builder.query({
      query: (country) => `top_200_tracks?country=${country}`,
    }),
  }),
});

export const {useGetTopMonthlyQuery, useGetTopChartQuery, useGetTopCountryChart} = spotifyApi;