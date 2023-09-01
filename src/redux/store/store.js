import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../slice/moviesSlice";

// combining reducers
const rootReducer = combineReducers({
    movies: moviesReducer,
});

// store
export const store = configureStore({
    reducer: rootReducer,
});
