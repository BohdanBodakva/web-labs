import React from "react";
import "./CatalogueItem.css";
import MoreAboutGemButton from "./more_about_gem/MoreAboutGemButton";



export default function CatalogueItem(props) {
    return (
        <div className="catalogue-item">
            <div className="item-image">
                <img src={props.image} alt="gem" />
            </div>
            <div className="item-title">
                <h2>{props.uniqueName}</h2>
            </div>
            <div className="item-text">
                <p><b>Sort:</b> {props.sort}</p>
                {/* <p><b>Hardness:</b> {props.hardness} by Mohs</p>
                <p><b>Purity:</b> {props.purity} rel. units</p> */}
                <p><b>Price:</b> {props.price} $</p>
            </div>
            <MoreAboutGemButton />
        </div>
    )
}