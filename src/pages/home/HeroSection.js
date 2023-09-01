import React, { useEffect, useState } from "react";
import "./HeroSection.scss";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../../redux/slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMsg } from "../../helpers";

export default function HeroSection() {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");

    // navigate
    const navigate = useNavigate();

    // dispatch
    const dispatch = useDispatch();

    // fetching banner image
    useEffect(() => {
        dispatch(fetchMovies({ url: "/movie/upcoming" }));
    }, []);

    // getting data from redux store
    const { movies, success, error, isPending } = useSelector((data) => data.movies);
    const { url, categories } = useSelector((data) => data.home);

    useEffect(() => {
        let random = Math.floor(Math.random() * 20);
        if (movies?.results?.length > 0) {
            setBackground(url?.backdrop + movies?.results[random].backdrop_path);
        }
        console.log("back", background);
    }, [movies, url]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    };

    return (
        <div className="HeroSection flex-col" style={{ background: `url(${background})`}}>
            {error ? (
                <ErrorMsg error={error} />
            ) : (
                <div className="container flex-col">
                    <div className="title">Welcome.</div>
                    <div className="msg">Millions of movies, TV shows and people to discover. Explore now.</div>
                    <form className="search" onSubmit={handleSubmit}>
                        <input type="text" required name="" id="" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie or TV show..." />
                        <button>Search</button>
                    </form>
                </div>
            )}
        </div>
    );
}
