import HeroSection from "./HeroSection";
import React, { useEffect } from "react";
import "./Home.scss";
import { fetchMovies } from "../../redux/slice/moviesSlice";
import { useDispatch } from "react-redux";
import MoviesRow from "../../components/MoviesRow";

export default function Home() {
    // dispatch
    const dispatch = useDispatch();

    // fetching movies data
    useEffect(() => {
        dispatch(fetchMovies({ url: "/movie/popular" }));
    }, []);

    return (
        <div className="Home">
            <HeroSection />
            <div className="container">
                <MoviesRow categories={['day', "week"]} type="trending" typeUrl='trending' mediaType='all'/>
                <MoviesRow categories={['movie', "tv"]} type="what's popular" typeUrl='popular' />
                <MoviesRow categories={['movie', "tv"]} type="top rated" typeUrl='top_rated' />
            </div>
        </div>
    );
}
