import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ap-news-b.onrender.com/api" }), // Assuming your backend proxy is at /api
  endpoints: (builder) => ({
    getLiveVideo: builder.query({
      query: () => "youtube/live",
      // Provides a tag to this query. This can be used to invalidate the cache.
      providesTags: ["LiveVideo"],
    }),
    getRecentVideos: builder.query({
      query: () => "youtube/recent-videos",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLiveVideoQuery, useGetRecentVideosQuery } = youtubeApi;
