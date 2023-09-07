import React from "react";
import "./MovieCard.scss";
import noPoster from "../assets/no-poster.png";
import dayjs from "dayjs";
import RatingsCircle from "./RatingsCircle";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, url, mediaType }) {
    const navigate = useNavigate();

    const imgURL = movie.poster_path ? url.poster + movie.poster_path : noPoster;

    return (
        <div className="MovieCard flex-col" onClick={() => navigate(`/${movie?.media_type || mediaType}/${movie.id}`)}>
            <div className="img">
                <img src={imgURL} loading="lazy" alt="" />
                <div className="genres"></div>
                <RatingsCircle rating={movie.vote_average.toFixed(1)} />
            </div>
            <div className="main-content">
                <div className="title">{movie.title || movie.name}</div>
                <div className="date">{dayjs(movie.release_date).format("MMM D, YYYY")}</div>
            </div>
        </div>
    );
}
