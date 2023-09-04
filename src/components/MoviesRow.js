import { useFetchMovies } from "../hooks/fetchMovies/useFetchMovies";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import SwitchButton from "./SwitchButton";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./MoviesRow.scss";

export default function MoviesRow({ categories, type, mediaType, typeUrl }) {
    // state
    const [moviesActive, setMoviesActive] = useState(true);

    // useFetchHook
    const { error, isPending, movies, fetchMovies } = useFetchMovies();

    // fetching data
    useEffect(() => {
        if (typeUrl !== "trending") {
            fetchMovies(`/${moviesActive ? categories[0] : categories[1]}/${typeUrl}/`);
        } else {
            fetchMovies(`/${typeUrl}/${mediaType}/${moviesActive ? categories[0] : categories[1]}`);
        }
    }, [moviesActive]);

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
                    <div className="type">{type}</div>
                    <SwitchButton categories={categories} moviesActive={moviesActive} setMoviesActive={setMoviesActive} />
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
                    <div className="movies-list flex">
                        {movies?.results?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} isPending={isPending} url={url} mediaType={`${moviesActive ? categories[0] : categories[1]}`} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
