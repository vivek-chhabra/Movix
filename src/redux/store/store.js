import { creditsReducer, videosReducer } from "../slice/movieDetailsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiConfigReducer } from "../slice/ApiConfigSlice";
import { moviesReducer } from "../slice/moviesSlice";
import { homeReducer } from "../slice/homeSlice";

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
