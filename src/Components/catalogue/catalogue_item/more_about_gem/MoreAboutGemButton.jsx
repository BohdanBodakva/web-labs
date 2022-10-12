import React from "react";
import "./MoreAboutGemButton.css";
import { Link } from "react-router-dom";

export default function MoreAboutGemButton(props) {
    return (
        <div className="more-about-gem-button-div">
            <Link to={"/catalogue/" + props.children.id }>
                <button className="more-about-gem-button"><b>More</b></button>
            </Link>
        </div>
    )
}