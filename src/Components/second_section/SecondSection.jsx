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
                            Buy one ruby and get opportunity to win one of our giftsdvlk dskhjavgjadsfg vjkdfajkg adfjkvjad fkvjkdfa jkbvdfjvn dfvjkndfjvnjdfanvjdf
                        </p>
                    </div>
                </div>
                <div className="part-body central-part-body">
                    <div className="body-image">
                        <img src={gems2_image} alt="gems2" id="gems2" />
                    </div>
                    <div className="body-text">
                        <p>
                            Buy one ruby and get opportunity to win one of our giftsdvlk dskhjavgjadsfg vjkdfajkg adfjkvjad fkvjkdfa jkbvdfjvn dfvjkndfjvnjdfanvjdf
                        </p>
                    </div>
                </div>
                <div className="part-body">
                    <div className="body-image">
                        <img src={gem3_image} alt="gem3" id="gem3" />
                    </div>
                    <div className="body-text">
                        <p>
                            Buy one ruby and get opportunity to win one of our giftsdvlk dskhjavgjadsfg vjkdfajkg adfjkvjad fkvjkdfa jkbvdfjvn dfvjkndfjvnjdfanvjdf
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}