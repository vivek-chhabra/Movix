import React, { useState } from "react";
import "./SwitchButton.scss";

export default function SwitchButton({categories, setMoviesActive, moviesActive}) {

    return (
        <div className="SwitchButton flex">
            <div className={`movies ${moviesActive ? "active" : ""}`} style={moviesActive ? { color: "white" } : { color: "black" }} onClick={() => setMoviesActive(true)}>
                {categories[0]}
            </div>
            <div className={`tv ${!moviesActive ? "active" : ""}`} style={!moviesActive ? { color: "white" } : { color: "black" }} onClick={() => setMoviesActive(false)}>
                {categories[1]}
            </div>
        </div>
    );
}
