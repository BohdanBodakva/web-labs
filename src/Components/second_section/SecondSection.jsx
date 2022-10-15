import React from "react";
import "./SecondSection.css";
import ShowMoreLessButton from "./show_more_less_button/ShowMoreLessButton";
import { HomeGemsContext, homeGems } from "../../context/home_gems_context/HomeGemsContext";
import PartBody from "./catalogue_part/part_body/PartBody";





export default function SecondSection() {
    return (
        <section className="second-section">
            <div className="part-title">Gems in catalogue</div>
            <div className="render-gems">
                <ShowMoreLessButton />
            </div>
        </section>
    )
}