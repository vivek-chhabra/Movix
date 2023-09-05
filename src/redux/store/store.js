import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../slice/moviesSlice";
import { apiConfigReducer } from "../slice/ApiConfigSlice";
import { homeReducer } from "../slice/homeSlice";
import { creditsReducer, videosReducer } from "../slice/movieDetailsSlice";

// combining reducers
const rootReducer = combineReducers({
    movies: moviesReducer,
    apiConfig: apiConfigReducer,
    home: homeReducer,
    videoDetails: videosReducer,
    creditDetails: creditsReducer,
});

// store
export const store = configureStore({
    reducer: rootReducer,
});
