import HeroSection from "./HeroSection";
import React, { useEffect } from "react";
import "./Home.scss";
import { fetchMovies } from "../../redux/slice/moviesSlice";
import { useDispatch } from "react-redux";

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
            <div className="container"></div>
        </div>
    );
}
