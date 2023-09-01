// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // initial state
// const initialState = {
//     isPending: false,
//     success: false,
//     error: null,
//     movies: [],
// };

// // createAsyncThunk
// const fetchMovies = createAsyncThunk("movies/fetchMovies", async (payload, { getState, dispatch }) => {
//     const { data } = await axios("");
//     // return data;
// });

// // creating slice
// const moviesSlice = createSlice({
//     name: "movies",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(fetchMovies.pending, (state, action) => {
//             state.isPending = true;
//             state.error = null;
//             state.success = false;
//         });
//         builder.addCase(fetchMovies.fulfilled, (state, action) => {
//             state.isPending = false;
//             state.success = true;
//             state.movies = aciton.payload;
//         });
//         builder.addCase(fetchMovies.rejected, (state, action) => {
//             state.isPending = false;
//             console.log(action.error.message);
//             state.error = action.error.message;
//             state.success = false;
//             state.movies = [];
//         });
//     },
// });

// // reducer
// export const moviesReducer = moviesSlice.reducer;
