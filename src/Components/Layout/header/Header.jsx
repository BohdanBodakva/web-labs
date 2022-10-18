import React from "react";
import "./Header.css";
import headerGem from "../../../images/headerGem.png"
import NavBar from "./nav_bar/NavBar";

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
            <NavBar />
        </header>
    )
}