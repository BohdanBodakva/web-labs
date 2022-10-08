import React from "react";
import "./Catalogue.css";
import CatalogueItem from "./catalogue_item/CatalogueItem";
import ToYourCartButton from "./to_your_cart_button/ToYourCartButton";

const gems = [
    {
        id: 1,
        uniqueName: "Nephrite",
        price: 27000,
        hardness: 14,
        purity: 1.1,
        sort: "Diamond"
    },
    {
        id: 2,
        uniqueName: "Kyanite",
        price: 17000,
        hardness: 21,
        purity: 15,
        sort: "Ruby"
    },
    {
        id: 3,
        uniqueName: "Lapis",
        price: 96000,
        hardness: 19,
        purity: 1.9,
        sort: "Sapphire"
    },
    {
        id: 4,
        uniqueName: "Malachite",
        price: 11000,
        hardness: 24,
        purity: 25,
        sort: "Diamond"
    },
    {
        id: 5,
        uniqueName: "Zircon",
        price: 14500,
        hardness: 10,
        purity: 14.4,
        sort: "Emerald"
    },
    {
        id: 6,
        uniqueName: "Tourmaline",
        price: 54000,
        hardness: 18,
        purity: 8.4,
        sort: "Sapphire"
    }
]

function RenderGems() {
    return gems.map(
        gem => <CatalogueItem {...gem} />
    )
}

export default function Catalogue() {
    return (
        <div className="catalogue-wrap">
            <div className="catalogue-div">
                <RenderGems />
            </div>
        </div>
    )
}