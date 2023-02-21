import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { shazamCoreApi } from "./spotifyAPI";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});