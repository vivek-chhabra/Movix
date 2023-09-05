import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./DetailsBanner.scss";
import PosterFallback from "../../assets/no-poster.png";
import RatingsCircle from "../../components/RatingsCircle";
import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import { PlayIcon } from "./PlayBtn";
import VideoPopup from "../../components/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { mediaType, id } = useParams();
    const { url } = useSelector((state) => state.home);
    const { error, isPending, movies: data, fetchMovies } = useFetchMovies();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [window.location.href]);

    useEffect(() => {
        fetchMovies(`/${mediaType}/${id}`);
    }, [mediaType, id]);

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter((f) => f.job === "Writer");

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    const handleVideoPlayer = () => {
        setShow(true);
        setVideoId(video.key);
    };

    console.log("video", video);

    return (
        <div className="DetailsBanner">
            {!isPending ? (
                <>
                    <div className="backdrop-img">
                        <img src={url?.backdrop + data?.backdrop_path} alt="" />
                        <div className="opacity-layer"></div>
                    </div>

                    <div className="container">
                        <div className="left">{data.poster_path ? <img src={url.backdrop + data.poster_path} className="posterImg" alt="" /> : <img src={PosterFallback} className="posterImg" alt="" />}</div>
                        <div className="right flex-col">
                            <div className="title">{`${data?.name || data?.title} (${dayjs(data.release_date).format("YYYY")})`} </div>
                            <div className="subtitle">{data.tagline}</div>
                            <div className="genres flex">
                                {data?.genres?.map((cate) => (
                                    <div className="category">{cate.name}</div>
                                ))}
                            </div>
                            <div className="additional-info flex">
                                <RatingsCircle rating={data?.vote_average?.toFixed(1)} />
                                <div className="playbtn" onClick={handleVideoPlayer}>
                                    <PlayIcon />
                                    <div className="text">Watch Trailer</div>
                                </div>
                            </div>
                            <div className="over-view">
                                <div className="heading">Overview</div>
                                <div className="description">{data.overview}</div>
                            </div>
                            <div className="info flex">
                                {data.status && (
                                    <div className="infoItem flex">
                                        <span className="text bold">Status: </span>
                                        <span className="text">{data.status}</span>
                                    </div>
                                )}
                                {(data.release_date || data.first_air_date) && (
                                    <div className="infoItem flex">
                                        <span className="text bold">Release Date: </span>
                                        <span className="text">{dayjs(data.release_date).format("MMM, D, YYYY")}</span>
                                    </div>
                                )}
                                {data.runtime && (
                                    <div className="infoItem flex">
                                        <span className="text bold">Runtime: </span>
                                        <span className="text">{toHoursAndMinutes(data.runtime)}</span>
                                    </div>
                                )}
                            </div>

                            {director.length > 0 && (
                                <div className="info flex">
                                    <div className="text bold">Director: </div>
                                    <span className="text dull">
                                        {director.map((d, i) => (
                                            <span key={i}>
                                                {d.name} {director?.length - 1 !== i && ", "}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            )}
                            {writer?.length > 0 && (
                                <div className="info flex writer">
                                    <div className="text bold">Writer: </div>
                                    <span className="text dull">
                                        {writer.map((d, i) => (
                                            <span key={i}>
                                                {d.name} {writer?.length - 1 !== i && ", "}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            )}
                            {data?.created_by?.length > 0 && (
                                <div className="info flex">
                                    <div className="text bold">Creator: </div>
                                    <span className="text dull">
                                        {data?.created_by?.map((d, i) => (
                                            <span key={i}>
                                                {d.name} {data?.created_by?.length - 1 !== i && ", "}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            )}
                        </div>
                        <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
                    </div>
                </>
            ) : (
                <div className="detailsBannerSkeleton container">
                    <div className="left skeleton"></div>
                    <div className="right">
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
