import React, { useState } from "react";
import "./ShowMoreLessButton.css";
import { HomeGemsContext, homeGems } from "../../../context/home_gems_context/HomeGemsContext";
import PartBody from "../catalogue_part/part_body/PartBody";

function RenderGems(props) {
    return props.gems.map(gem => <PartBody key={gem.id} gem={gem}></PartBody>);
}

export default function ShowMoreLessButton(props) {
    const [showMore, setShowMore] = useState(false);

    const allGems = homeGems;
    const firstThreeGems = homeGems.slice(0, 3);

    return (
        <div className="more-less-div">
            <div className="show-more-less">
                {showMore ? <RenderGems gems={allGems} /> : <RenderGems gems={firstThreeGems} />}
            </div>
            <div className="s-m-l-div">
                <button className="show-more-less-button" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
    )
}