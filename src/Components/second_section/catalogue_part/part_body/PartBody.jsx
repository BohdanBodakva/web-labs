import React from "react";
import MoreButton from "./more_button/MoreButton";
import "./PartBody.css";

export default function PartBody(props) {

    return (
        <div className="part-body">
            <div className="body-image">
                <img src={props.gem.image} alt="gem" id={props.gem.id} />
            </div>
            <div className="body-text">
                <p>
                    {props.gem.text}
                </p>
            </div>
            <MoreButton />
        </div>
    )
}
