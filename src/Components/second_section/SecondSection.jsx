import React from "react";
import "./SecondSection.css";

import AllCatalogue from "./catalogue_part/all_catalogue/AllCatalogue";

import CataloguePart from "./catalogue_part/CataloguePart";

export default function SecondSection() {
    


    return (
        <section className="second-section">
            <div className="part-title">Gems in catalogue</div>
            <CataloguePart />
            <AllCatalogue />
        </section>
    )
}