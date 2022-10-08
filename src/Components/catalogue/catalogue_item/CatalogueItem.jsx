import React from "react";
import "./CatalogueItem.css";
import BuyButton from "./buy_button/BuyButton";

import Gem1 from "../catalogue_images/gem1.png";
import Gem2 from "../catalogue_images/Gem2.png";
import Gem3 from "../catalogue_images/gem3.png";
import Gem4 from "../catalogue_images/gem4.png";
import Gem5 from "../catalogue_images/gem5.png";
import Gem6 from "../catalogue_images/gem6.png";

function getImageSrc(id) {
    if (id === 1)
        return Gem1;
    else if (id === 2)
        return Gem2;
    else if (id === 3)
        return Gem3;
    else if (id === 4)
        return Gem4;
    else if (id === 5)
        return Gem5;
    else if (id === 6)
        return Gem6;
}


export default function CatalogueItem(props) {
    return (
        <div className="catalogue-item">
            <div className="item-image">
                <img src={getImageSrc(props.id)} alt="gem" />
            </div>
            <div className="item-title">
                <h2>{props.uniqueName}</h2>
            </div>
            <div className="item-text">
                <p><b>Sort:</b> {props.sort}</p>
                <p><b>Hardness:</b> {props.hardness} by Mohs</p>
                <p><b>Purity:</b> {props.purity} rel. units</p>
                <p><b>Price:</b> {props.price} $</p>
            </div>
            <BuyButton />
        </div>
    )
}