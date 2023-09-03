import React from "react";
import "./MovieCard.scss";
import noPoster from "../assets/no-poster.png";
import dayjs from "dayjs";
import RatingsCircle from "./RatingsCircle";

export default function MovieCard({ movie, url }) {
    const imgURL = movie.poster_path ? url.poster + movie.poster_path : noPoster;
    return (
        <div className="MovieCard flex-col">
            <div className="img">
                <img src={imgURL} alt="" />
                <div className="genres"></div>
                <RatingsCircle rating={movie.vote_average.toFixed(1)}/>
            </div>
            <div className="main-content">
                <div className="title">{movie.title || movie.name}</div>
                <div className="date">{dayjs(movie.release_date).format("MMM D, YYYY")}</div>
            </div>
        </div>
    );
}
