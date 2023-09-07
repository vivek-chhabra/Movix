import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, headers } from "../../utils/API";
import axios from "axios";

// initial state
const initialState = {
    isPending: false,
    success: false,
    error: null,
    movies: [],
};

// createAsyncThunk
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async ({ url, params }, { getState, dispatch }) => {
    const res = await axios(BASE_URL + url, {
        headers,
        params,
    });
    return res;
});

// creating slice
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.isPending = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isPending = false;
            state.success = true;
            state.movies = action.payload.data;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isPending = false;
            console.log(action.error.message);
            state.error = action.error.message;
            state.success = false;
            state.movies = [];
        });
    },
});

// reducer
export const moviesReducer = moviesSlice.reducer;
