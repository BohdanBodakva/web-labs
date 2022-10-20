import React from "react";
import "./GemImage.css";

export default function GemImage(props) {
    console.log("LLL ", props);
    return (
        <div className="gem-image-div">
            <img src={props.gem.imageUrl} alt="gem" />
        </div>
    )
}