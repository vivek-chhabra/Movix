import { fetchCredits, fetchVideos } from "../../redux/slice/movieDetailsSlice";
import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import VideoSection from "./VideoSection";
import "./MovieDetails.scss";
import Cast from "./Cast"; 

export default function MovieDetails() {
    const { id, mediaType } = useParams();

    const dispatch = useDispatch();
    const { error, isPending, success, movieDetails: vidDetails } = useSelector((state) => state.videoDetails);
    const { error: creErr, isPending: crePending, success: creSuccess, movieDetails: creDetails } = useSelector((state) => state.creditDetails);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [window.location]);

    useEffect(() => {
        dispatch(fetchVideos({ url: `/${mediaType}/${id}/videos` }));
        dispatch(fetchCredits({ url: `/${mediaType}/${id}/credits` }));
    }, []);

    return (
        <div className="MovieDetails">
            {success && creSuccess && <DetailsBanner video={vidDetails?.data?.results[0]} crew={creDetails?.data?.crew} />}
            <Cast data={creDetails?.data?.cast} isPending={crePending} />
            <VideoSection data={vidDetails?.data} isPending={isPending} />
        </div>
    );
}
