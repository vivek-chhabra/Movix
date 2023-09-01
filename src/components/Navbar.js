import React from "react";
import "./Navbar.scss";
import logo from "../assets/movix-logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="container flex">
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
                <div className="links flex">
                    <NavLink to={"/explore/movie"}>Movies</NavLink>
                    <NavLink to={"/explore/tv"}>TV Shows</NavLink>
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>
        </div>
    );
}
