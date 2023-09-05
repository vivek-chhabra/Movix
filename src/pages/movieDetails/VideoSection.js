import React, { useState } from "react";
import "./VideoSection.scss";
import VideoPopup from "../../components/VideoPopup";
import { PlayIcon } from "./PlayBtn";

const VideosSection = ({ data, isPending }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    const handleVideoPlayer = (key) => {
        setVideoId(key);
        setShow(true);
    };

    return (
        <div className="videosSection">
            <div className="container">
                <div className="sectionHeading">Official Videos</div>
                {!isPending ? (
                    <div className="videos">
                        {data?.results?.map((video) => {
                            return (
                                <div className="videoItem" key={video.id} onClick={() => handleVideoPlayer(video.key)}>
                                    <div className="videoThumbnail">
                                        <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="" />
                                        <PlayIcon />
                                    </div>
                                    <div className="videoTitle">
                                        {video.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
                <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
            </div>
        </div>
    );
};

export default VideosSection;
