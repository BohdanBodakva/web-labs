import React, { useContext } from "react";
import "./Gem.css";
import GemButtons from "./gem_buttons/GemButtons";
import GemImage from "./gem_image/GemImage";
import GemText from "./gem_text/GemText";
import { GemsContext, gems } from "../../context/catalogue_context/GemContext";






function getGemById(id) {

    let gem = gems.find(gem => gem.id === id);

    return gem;
}

export default function Gem(props) {


    console.log(props);
    // console.log(id.children);
    const gem = getGemById(parseInt(props.id));

    return (
        <div className="body-d-div">
            <div className="gem-div">
                <div className="gem-d-div">
                    <GemImage gem={gem} />
                    <GemText gem={gem} />
                </div>
                <div className="gem-b-div">
                    <GemButtons />
                </div>
            </div>
        </div>
    )
}