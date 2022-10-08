import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/"><b>Home</b></Link>
                </li>
                <li>
                    <Link to="/catalogue"><b>Catalogue</b></Link>
                </li>
            </ul>
        </nav>
    )

}