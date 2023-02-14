import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { spotifyApi } from "./spotifyAPI";

export const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,

    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
})