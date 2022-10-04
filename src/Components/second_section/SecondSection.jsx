import React from "react";
import "./SecondSection.css";
import gem1_image from "../../images/gem1.png";
import gems2_image from "../../images/gems2.png";
import gem3_image from "../../images/gem3.png";

export default function SecondSection() {

    return (
        <section className="second-section">
            <div className="part-title">Gems in catalogue</div>
            <div className="catalogue-part">
                <div className="part-body">
                    <div className="body-image">
                        <img src={gem1_image} alt="gem1" id="gem1" />
                    </div>
                    <div className="body-text">
                        <p>
                            Buy one ruby and get opportunity to win one of our gifts.
                            The promotion ends in 3 days.
                        </p>
                    </div>
                    <div className="more">
                        <a href="">More</a>
                    </div>
                </div>
                <div className="part-body central-part-body">
                    <div className="body-image">
                        <img src={gems2_image} alt="gems2" id="gems2" />
                    </div>
                    <div className="body-text">
                        <p>
                            The latest collections of precious gems are available right now!
                            Hurry to buy in time!
                        </p>
                    </div>
                    <div className="more">
                        <a href="">More</a>
                    </div>
                </div>
                <div className="part-body">
                    <div className="body-image">
                        <img src={gem3_image} alt="gem3" id="gem3" />
                    </div>
                    <div className="body-text">
                        <p>
                            The limited series of sapphire named "Elite Prestige"
                            goes sale this year!
                        </p>
                    </div>
                    <div className="more">
                        <a href="">More</a>
                    </div>
                </div>
            </div>
            <div className="all-catalogue">
                <a href="">All catalogue</a>
            </div>
        </section>
    )
}