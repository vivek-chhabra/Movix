import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headers } from "../../utils/API";

const initialState = {
    error: null,
    isPending: false,
    success: false,
    movieDetails: {},
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({ url, params }, { getState }) => {
    const res = await axios(BASE_URL + url, {
        headers,
        params,
    });
    return res;
});
export const fetchCredits = createAsyncThunk("credits/fetchCredits", async ({ url, params }, { getState }) => {
    const res = await axios(BASE_URL + url, {
        headers,
        params,
    });
    return res;
});

const videosSlice = createSlice({
    name: "videoDetails",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.isPending = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.isPending = false;
            state.error = null;
            state.success = true;
            state.movieDetails = action.payload;
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.isPending = false;
            console.log(action.error.message);
            state.error = action.error.message;
            state.success = false;
            state.movieDetails = {};
        });
    },
});
const creditsSlice = createSlice({
    name: "creditDetails",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCredits.pending, (state, action) => {
            state.isPending = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(fetchCredits.fulfilled, (state, action) => {
            state.isPending = false;
            state.error = null;
            state.success = true;
            state.movieDetails = action.payload;
        });
        builder.addCase(fetchCredits.rejected, (state, action) => {
            state.isPending = false;
            console.log(action.error.message);
            state.error = action.error.message;
            state.success = false;
            state.movieDetails = {};
        });
    },
});

// reducer
export const videosReducer = videosSlice.reducer;
export const creditsReducer = creditsSlice.reducer;
