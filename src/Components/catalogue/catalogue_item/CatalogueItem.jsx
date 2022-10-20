import React from "react";
import "./CatalogueItem.css";
import MoreAboutGemButton from "./more_about_gem/MoreAboutGemButton";



export default function CatalogueItem(props) {
    return (
        <div className="catalogue-item">
            <div className="item-image">
                <img src={props.gem.imageUrl} alt="gems" />
            </div>
            <div className="item-title">
                <h2>{props.gem.uniqueName}</h2>
            </div>
            <div className="item-text">
                <p><b>Sort:</b> {props.gem.sort}</p>
                <p><b>Price:</b> {props.gem.price} $</p>
            </div>
            <MoreAboutGemButton gem={props.gem}></MoreAboutGemButton>
        </div>
    )
}