import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";
import React, { useEffect, useState } from "react";
import DetailsBanner from "./DetailsBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCredits, fetchVideos } from "../../redux/slice/movieDetailsSlice";
import Cast from "./Cast";

export default function MovieDetails() {
    const { id, mediaType } = useParams();

    const dispatch = useDispatch();
    const { error, isPending, success, movieDetails: vidDetails } = useSelector((state) => state.videoDetails);
    const { error: creErr, isPending: crePending, success: creSuccess, movieDetails: creDetails } = useSelector((state) => state.creditDetails);

    useEffect(() => {
        dispatch(fetchVideos({ url: `/${mediaType}/${id}/videos` }));
        dispatch(fetchCredits({ url: `/${mediaType}/${id}/credits` }));
    }, []);

    return (
        <div className="MovieDetails">
            {success && creSuccess && <DetailsBanner video={vidDetails?.data?.results[0]} crew={creDetails?.data?.crew} />}
            {/* <Cast data={creDetails.cast} isPending={crePending} /> */}
        </div>
    );
}
