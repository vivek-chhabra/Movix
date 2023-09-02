import React from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {LazyLoadImage} from 'react-lazy-load-image-component'

export default function LazyImg({ className, url }) {
    return (
        <div className="LazyImg">
            <LazyLoadImage className={className || ""} effect="blur" src={url} alt="" />
        </div>
    );
}
