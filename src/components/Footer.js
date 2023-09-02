import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container flex-col">
                <div className="items flex">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                </div>
                <div className="about-us">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="media flex">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
}
