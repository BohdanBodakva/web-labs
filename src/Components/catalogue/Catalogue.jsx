import React from "react";
import "./Catalogue.css";
import CatalogueItem from "./catalogue_item/CatalogueItem";

const gems = [
    {
        id: 1,
        uniqueName: "1",
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
    },
    {
        id: 2,
        uniqueName: "1",
        weight: 1,
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
    },
    {
        id: 3,
        uniqueName: "1",
        weight: 1,
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
    },
    {
        id: 4,
        uniqueName: "1",
        weight: 1,
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
    },
    {
        id: 5,
        uniqueName: "1",
        weight: 1,
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
    },
    {
        id: 6,
        uniqueName: "1",
        weight: 1,
        price: 1,
        hardness: 1,
        purity: 1,
        sort: 1
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