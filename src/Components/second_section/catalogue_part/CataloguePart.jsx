import React from "react";
import "./CataloguePart.css";
import PartBody from "./part_body/PartBody";
import gem1_image from "../../../images/gem1.png";
import gems2_image from "../../../images/gems2.png";
import gem3_image from "../../../images/gem3.png";

export default function CataloguePart() {
    const text1 = "Buy one ruby and get opportunity to win one of our gifts." +
        "The promotion ends in 3 days.";

    const text2 = "The latest collections of precious gems are available right now! " +
        "Hurry to buy in time!";

    const text3 = "The limited series of sapphire named 'Elite Prestige' " +
        "goes sale this year!";

    return (
        <div className="catalogue-part">
            <PartBody body_image={gem1_image}
                body_text={text1}
                gem_id="gem1" />

            <PartBody body_image={gems2_image}
                body_text={text2}
                gem_id="gems2"
                part_class="central-part-body" />

            <PartBody body_image={gem3_image}
                body_text={text3}
                gem_id="gem3" />
        </div>
    )
}