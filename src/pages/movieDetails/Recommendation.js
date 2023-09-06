import React, { useEffect } from "react";
import MoviesRow from "../../components/MoviesRow";
import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";

export default function Recommendation({ mediaType, id }) {
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    useEffect(() => {
        fetchMovies(`/${mediaType}/${id}/recommendation`);
    }, []);

    const title = mediaType === 'tv' ? 'Recommended TV Shows' : 'Recommended Movies';  

    return (
        <div className="Recommendation">
            <MoviesRow type={title} typeUrl='recommendations' mediaType={mediaType} id={id}/>
        </div>
    );
}
