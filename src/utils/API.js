import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.REACT_APP_API_TOKEN;
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchData = async (url, params) => {
    try {
        const {data} = await axios(BASE_URL + url, {
            headers, 
            params,
        })
        return data
    } catch(err) {
        console.log(err.message)
    }
};