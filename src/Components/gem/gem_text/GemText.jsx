import React from "react";
import "./GemText.css";

export default function Gem(props) {
    console.log(props.gem);

    return (
        <div className="gem-text-div">
            <div className="gem-text-title">
                <h1>{props.gem.uniqueName}</h1>
            </div>
            <div className="gem-text-text">
                <p><b>Sort:</b> {props.gem.sort}</p>
                <p><b>Hardness:</b> {props.gem.hardness} by Mohs</p>
                <p><b>Purity:</b> {props.gem.purity} rel. units</p>
                <p><b>Price:</b> {props.gem.price} $</p>
            </div>
        </div>
    )
}