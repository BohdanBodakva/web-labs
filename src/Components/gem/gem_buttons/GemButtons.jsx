import React from "react";
import { Link } from "react-router-dom";
import "./GemButtons.css";

export default function GemButtons() {
    return (
        <div className="g-buttons">
            <div className="gem-buttons-div">
                <div className="g-b">
                    <button className="buy-button-buttons">Buy</button>
                </div>
                <div className="g-b">
                    <Link to="/catalogue">
                        <button className="back-button-buttons">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}