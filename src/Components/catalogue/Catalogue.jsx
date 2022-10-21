import React, { useContext } from "react";
import "./Catalogue.css";
import Filters from "./filters/Filters";





export default function Catalogue() {
    return (
        <section className="catalogue-section">
            <div className="catalogue-wrap">
                <Filters />                
            </div>
        </section>
    )
}