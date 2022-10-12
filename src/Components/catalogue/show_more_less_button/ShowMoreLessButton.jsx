import React, { useState } from "react";
import "./ShowMoreLessButton.css";

export default function ShowMoreLessButton(props) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="more-less-div">
            <div className="show-more-less">
                {showMore ? props.allGems : props.firstThreeGems}
            </div>
            <div className="s-m-l-div">
                <button className="show-more-less-button" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
    )
}