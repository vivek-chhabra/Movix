import { useFetchMovies } from "../hooks/fetchMovies/useFetchMovies";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import SwitchButton from "./SwitchButton";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./MoviesRow.scss";

export default function MoviesRow({ categories, type, mediaType, typeUrl, id }) {
    const [moviesActive, setMoviesActive] = useState(true);
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    useEffect(() => {
        if (typeUrl === "popular" || typeUrl === "top_rated") {
            fetchMovies(`/${moviesActive ? categories[0] : categories[1]}/${typeUrl}/`);
        }
        if (typeUrl === "similar" || typeUrl === "recommendations") {
            setMoviesActive(mediaType === "movie");
            fetchMovies(`/${mediaType}/${id}/${typeUrl}`);
        }
        if (typeUrl === "trending") {
            fetchMovies(`/${typeUrl}/${mediaType}/${moviesActive ? categories[0] : categories[1]}`);
        }
    }, [moviesActive, id]);

    // instances for hooks
    const { url } = useSelector((data) => data.home);
    const navigate = useNavigate();
    const location = useLocation();
    const carouselRef = useRef();

    // loading skeleton
    const loadingSkeleton = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="MoviesRow">
            <div className="container flex-col">
                <div className="top flex">
                    <div className="type">{movies?.results?.length > 0 && type}</div>
                    {typeUrl !== "similar" && typeUrl !== "recommendations" && <SwitchButton categories={categories} moviesActive={moviesActive} setMoviesActive={setMoviesActive} />}
                </div>
                {isPending ? (
                    <div className="loadingSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                ) : (
                    movies?.results?.length > 0 && (
                        <div className="movies-list flex">
                            {movies?.results?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} isPending={isPending} url={url} mediaType={categories ? `${moviesActive ? categories[0] : categories[1]}` : mediaType} />
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
