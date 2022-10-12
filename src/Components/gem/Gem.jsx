import React from "react";
import "./Gem.css";
import GemButtons from "./gem_buttons/GemButtons";
import GemImage from "./gem_image/GemImage";
import GemText from "./gem_text/GemText";

const gems = [
    {
        id: 1,
        image: "https://www.cooksongold.com/images-prod/61TOADTF.jpg",
        uniqueName: "Nephrite",
        price: 27000,
        hardness: 14,
        purity: 1.1,
        sort: "Diamond"
    },
    {
        id: 2,
        image: "https://www.cooksongold.com/images-prod/61RUBP01.jpg",
        uniqueName: "Kyanite",
        price: 17000,
        hardness: 21,
        purity: 15,
        sort: "Ruby"
    },
    {
        id: 3,
        image: "https://www.cooksongold.com/images-prod/61MFR20D.jpg",
        uniqueName: "Lapis",
        price: 96000,
        hardness: 19,
        purity: 1.9,
        sort: "Sapphire"
    },
    {
        id: 4,
        image: "https://www.cooksongold.com/images-prod/61LBPC28.jpg",
        uniqueName: "Malachite",
        price: 11000,
        hardness: 24,
        purity: 25,
        sort: "Diamond"
    },
    {
        id: 5,
        image: "https://www.cooksongold.com/images-prod/61EMRC40.jpg",
        uniqueName: "Zircon",
        price: 14500,
        hardness: 10,
        purity: 14.4,
        sort: "Emerald"
    },
    {
        id: 6,
        image: "https://www.cooksongold.com/images-prod/61SAPR64.jpg",
        uniqueName: "Tourmaline",
        price: 54000,
        hardness: 18,
        purity: 8.4,
        sort: "Sapphire"
    }
]

function getGemById(id) {
    let gem = gems.find(gem => gem.id === id);
    console.log(gem);
    return gem;
}

export default function Gem(id) {
    const gem = getGemById(parseInt(id.children));

    return (
        <div className="body-d-div">
            <div className="gem-div">
                <div className="gem-d-div">
                    <GemImage>
                        {gem}
                    </GemImage>
                    <GemText>
                        {gem}
                    </GemText>
                </div>
                <div className="gem-b-div">
                    <GemButtons />
                </div>
            </div>
        </div>
    )
}