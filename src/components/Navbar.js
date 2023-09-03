import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../assets/movix-logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    // state
    const [showMenu, setShowMenu] = useState(false);

    // handleMenu
    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={`Navbar ${showMenu && "show-nav"}`}>
            <div className={`container flex`}>
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
                <div className={`links flex ${showMenu ? "show-nav" : ""}`}>
                    <NavLink to={"/explore/movie"}>Movies</NavLink>
                    <NavLink to={"/explore/tv"}>TV Shows</NavLink>
                </div>
                <div className="menu-items">
                    <i className="fa-solid menu fa-bars" onClick={handleMenu} style={showMenu ? { display: "none" } : { display: "flex" }}>
                        {/* {">>"} */}
                    </i>
                    <i className="fa-solid cross fa-xmark" onClick={handleMenu} style={!showMenu ? { display: "none" } : { display: "flex" }}>
                        {/* X */}
                    </i>
                </div>
            </div>
        </div>
    );
}
