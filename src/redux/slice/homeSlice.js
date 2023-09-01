import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    url: {},
    categories: {},
};

// create slice
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});
