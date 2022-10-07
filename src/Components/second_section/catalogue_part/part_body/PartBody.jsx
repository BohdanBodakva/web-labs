import React from "react";
import MoreButton from "./more_button/MoreButton";
import "./PartBody.css";

export default function PartBody(props) {
    const imageUrl = props.body_image;
    const gemId = props.gem_id;
    
    const partClass = props.part_class;
    const clazz = "part-body " + partClass;

    return (
        <div className={clazz}>
            <div className="body-image">
                <img src={imageUrl} alt="gem" id={gemId} />
            </div>
            <div className="body-text">
                <p>
                    {props.body_text}
                </p>
            </div>
            <MoreButton />
        </div>
    )
}
