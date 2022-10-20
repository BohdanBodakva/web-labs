import React from "react";
import "./RemoveFromCart.css";

export default function MoreAboutGemButton(props) {
    return (
        <div className="more-about-gem-button-div">
            <button onClick={props.removeGem} className="more-about-gem-button">
                <b>Remove from cart</b>
            </button>
        </div>
    )
}