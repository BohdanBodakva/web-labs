import React from "react";
import "./GemImage.css";

export default function GemImage(props) {
    return (
        <div className="gem-image-div">
            <img src={props.children.image} />
        </div>
    )
}