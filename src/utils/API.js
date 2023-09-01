import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_TOKEN = process.env.REACT_APP_API_TOKEN;
export const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};