import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "./api/youtubeApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [youtubeApi.reducerPath]: youtubeApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(youtubeApi.middleware),
  });
};