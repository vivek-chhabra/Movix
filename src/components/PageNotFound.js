import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.scss";


export default function PageNotFound() {
    return (
        <div className="PageNotFound">
            <div className="error404">404</div>
            <div className="content">
                <h2>Oops, can't find the page what you are looking for.</h2>
                <div className="message">The page you are looking for might have been removed, had its name changed or temporarily unavailable</div>
            </div>
            <NavLink to={"/"} className="button">
                <i className={"fa-solid fa-arrow-left"}></i>
                <p>Back To Home Page</p>
            </NavLink>
        </div>
    );
}
