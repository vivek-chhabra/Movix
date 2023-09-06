import React, { useEffect } from "react";
import MoviesRow from "../../components/MoviesRow";
import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";

export default function SimilarMovies({ mediaType, id }) {
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';  

    return (
        <div className="SimilarMovies" >
            <MoviesRow type={title} typeUrl='similar' mediaType={mediaType} id={id}/>
        </div>
    );
}
