import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import MoviesRow from "../../components/MoviesRow";
import React, { useEffect } from "react";

export default function Recommendation({ mediaType, id }) {
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    const title = mediaType === 'tv' ? 'Recommended TV Shows' : 'Recommended Movies';  

    return (
        <div className="Recommendation">
            <MoviesRow type={title} typeUrl='recommendations' mediaType={mediaType} id={id}/>
        </div>
    );
}
