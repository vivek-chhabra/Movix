import { BASE_URL, headers } from "../../utils/API";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMovies = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [movies, setMovies] = useState({});

    const fetchMovies = async (url, params) => {
            setError(null);
            setIsPending(true);
            setMovies({});
            try {
                const res = await axios(BASE_URL + url, {
                    headers,
                    params,
                });
                setIsPending(false);
                setMovies(res.data);
            } catch (err) {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        };

    return { isPending, error, movies, fetchMovies };
};
