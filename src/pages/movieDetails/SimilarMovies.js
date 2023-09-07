import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import MoviesRow from "../../components/MoviesRow";
import React, { useEffect } from "react";

export default function SimilarMovies({ mediaType, id }) {
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';  

    return (
        <div className="SimilarMovies" >
            <MoviesRow type={title} typeUrl='similar' mediaType={mediaType} id={id}/>
        </div>
    );
}
