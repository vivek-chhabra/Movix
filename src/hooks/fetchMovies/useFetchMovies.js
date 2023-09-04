import axios from "axios";
import { useState } from "react";
import { BASE_URL, headers } from "../../utils/API";

export const useFetchMovies = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [movies, setMovies] = useState({});

    const fetchMovies = async (url, params) => {
        setError(null);
        setIsPending(true);
        setError({});
        try {
            console.log('in the fetchHook', BASE_URL + url)
            const res = await axios(BASE_URL + url, {
                headers,
                params,
            });

            // fulfilled
            setIsPending(false);
            setMovies(res.data);
        } catch (err) {
            // rejected
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
        }
    };

    return { isPending, error, movies, fetchMovies };
};
