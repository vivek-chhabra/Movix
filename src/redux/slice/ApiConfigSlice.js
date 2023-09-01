import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headers } from "../../utils/API";

// initial state
const initialState = {
    isPending: false,
    error: null,
    success: false,
    ApiConfig: {},
};

// createAsyncThunk
export const fetchApiConfig = createAsyncThunk("Config/fetchApiConfig", async ({ url, params }, { getState, dispatch }) => {
    const res = await axios(BASE_URL + url, {
        headers,
        params,
    });
    return res;
});

// create slice
const ApiConfigSlice = createSlice({
    name: "config",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApiConfig.pending, (state, action) => {
            state.isPending = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(fetchApiConfig.fulfilled, (state, action) => {
            state.isPending = false;
            state.success = true;
            state.ApiConfig = action.payload.data;
        });
        builder.addCase(fetchApiConfig.rejected, (state, action) => {
            state.isPending = false;
            console.log(action.error.message);
            state.error = action.error.message;
            state.success = false;
            state.ApiConfig = {};
        });
    },
});

// reducer
export const apiConfigReducer = ApiConfigSlice.reducer;
