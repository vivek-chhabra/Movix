import React from "react";
import "./SearchCard.scss";
import noPoster from "../../assets/no-poster.png";
import dayjs from "dayjs";
import RatingsCircle from "../../components/RatingsCircle";
import { useNavigate } from "react-router-dom";

export default function SearchCard({ movie, url, mediaType }) {
    const navigate = useNavigate();

    const imgURL = movie.poster_path ? url.poster + movie.poster_path : noPoster;

    return (
        <div className="SearchCard flex-col" onClick={() => navigate(`/${movie?.media_type || mediaType}/${movie.id}`)}>
            <div className="img">
                <img src={imgURL} loading="lazy" alt="" />
            </div>
            <div className="main-content">
                <div className="title">{movie.title || movie.name}</div>
                <div className="date">{dayjs(movie.release_date).format("MMM D, YYYY")}</div>
            </div>
        </div>
    );
}
