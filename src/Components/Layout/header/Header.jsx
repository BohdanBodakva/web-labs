import React from "react";
import "./Header.css";
import headerGem from "../../../images/headerGem.png"

export default function Header() {
    return (
        <header className="header">
            <div className="image-div">
                <img className="diamond-image"
                    src={headerGem} alt="diamond" />
            </div>
            <div className="title-div">
                <h1>Buy best gems here !</h1>
            </div>
            <nav className="nav-bar">
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Catalogue</li></a>
                </ul>
            </nav>
        </header>
    )
}