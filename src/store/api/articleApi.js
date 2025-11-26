import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const articleApiSlice = createApi({
  reducerPath: "articleApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://ap-news-b.onrender.com/api" }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    //! GET ALL ARTICLES
    getAllNewsArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/all?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.items) {
          return {
            ...newItems,
            maxLoadedPage: arg,
          };
        }

        if (arg === 1) {
          return {
            ...newItems,
            maxLoadedPage: 1,
          };
        }

        const existingIds = new Set(currentCache.items.map((i) => i._id));
        const newUniqueItems = newItems.items.filter(
          (i) => !existingIds.has(i._id)
        );

        if (newUniqueItems.length > 0) {
          currentCache.items.push(...newUniqueItems);
        }

        currentCache.page = newItems.page;
        currentCache.total = newItems.total;
        currentCache.limit = newItems.limit;
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET BUISINESS ARTICLES
    getBusinessArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/category/Business?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg };
        }
        if (arg === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET BHOJPURI ARTICLES
    getBhojpuriArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/category/Bhojpuri?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg };
        }
        if (arg === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET TECHNOLOGY ARTICLES
    getTechnologyArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/category/Technology?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg };
        }
        if (arg === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET ELECTION ARTICLES
    getElectionsArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/category/Elections?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg };
        }
        if (arg === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET SPORTS ARTICLES
    getSportsArticles: builder.query({
      query: (page = 1) => ({
        url: `/articles/category/Sports?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg };
        }
        if (arg === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),

    //! GET ARTICLE-DETAILS BY ID
    getArticleById: builder.query({
      query: (id) => ({ url: `/articles/${id}`, method: "get" }),
      providesTags: ["Articles"],
    }),

    //! GET VIDEOS ARTICLES
    getVideosArticles: builder.query({
      query: () => ({ url: `/articles/allvideos`, method: "get" }),
      providesTags: ["Articles"],
    }),

    //! GET ARTICLES BY CATEGORY (Generic)
    getArticlesByCategory: builder.query({
      query: ({ category, page = 1 }) => ({
        url: `/articles/category/${category}?page=${page}`,
        method: "get",
      }),
      transformResponse: (response) => response,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.category}`;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (!currentCache?.articles) {
          return { ...newItems, maxLoadedPage: arg.page };
        }
        if (arg.page === 1) {
          return { ...newItems, maxLoadedPage: 1 };
        }
        currentCache.articles.push(...newItems.articles);
        currentCache.maxLoadedPage = Math.max(
          currentCache.maxLoadedPage || 1,
          arg.page
        );
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        const maxLoadedPage = endpointState?.data?.maxLoadedPage || 0;
        return currentArg.page > maxLoadedPage;
      },
      providesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetAllNewsArticlesQuery,
  useGetBusinessArticlesQuery,
  useGetBhojpuriArticlesQuery,
  useGetTechnologyArticlesQuery,
  useGetElectionsArticlesQuery,
  useGetSportsArticlesQuery,
  useGetArticleByIdQuery,
  useGetVideosArticlesQuery,
  useGetArticlesByCategoryQuery,
} = articleApiSlice;
