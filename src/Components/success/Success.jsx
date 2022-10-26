import React from "react";
import "./Success.css";
import headerGem from "../../images/headerGem.png";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <section className="success-section">
            <div className="success-upper">
                <div className="c-tr">
                    <img src={headerGem} className="success-img" />
                </div>
                <div className="c-tr">
                    <h2 className="thanks">Thank you for buying gems!</h2>
                </div>
            </div>
            <div className="success-buttons">
                <Link to="/">
                    <button className="success-b">Home</button>
                </Link>
                <Link to="/catalogue">
                    <button className="success-b">Catalogue</button>
                </Link>
            </div>
        </section>
    )
}