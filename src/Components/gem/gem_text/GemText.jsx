import React from "react";
import "./GemText.css";

export default function Gem(props) {
    console.log(props.children);

    return (
        <div className="gem-text-div">
            <div className="gem-text-title">
                <h1>{props.children.uniqueName}</h1>
            </div>
            <div className="gem-text-text">
                <p><b>Sort:</b> {props.children.sort}</p>
                <p><b>Hardness:</b> {props.children.hardness} by Mohs</p>
                <p><b>Purity:</b> {props.children.purity} rel. units</p>
                <p><b>Price:</b> {props.children.price} $</p>
            </div>
        </div>
    )
}