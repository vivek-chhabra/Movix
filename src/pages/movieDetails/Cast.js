import avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./Cast.scss";

const Cast = ({ data, isPending }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="Cast">
            <div className="container">
                <div className="sectionHeading">Top Cast</div>
                {!isPending ? (
                    <div className="listItems">
                        {data?.map((item, id) => {
                            const profileImg = item.profile_path ? url.profile + item.profile_path : avatar;
                            return (
                                <div className="listItem" key={id}>
                                    <div className="img">
                                        <img src={profileImg} loading="lazy" alt="" />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">{item.character}</div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cast;
