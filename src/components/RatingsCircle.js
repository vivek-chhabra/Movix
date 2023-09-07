import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./RatingsCircle.scss";
import React from "react";

export default function RatingsCircle({ rating }) {
    return (
        <div className="RatingsCircle">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
}
