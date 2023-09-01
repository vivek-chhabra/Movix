import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../slice/moviesSlice";
import { apiConfigReducer } from "../slice/ApiConfigSlice";
import { homeReducer } from "../slice/homeSlice";

// combining reducers
const rootReducer = combineReducers({
    movies: moviesReducer,
    apiConfig: apiConfigReducer,
    home: homeReducer,
});

// store
export const store = configureStore({
    reducer: rootReducer,
});
