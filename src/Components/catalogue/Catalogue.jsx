import React, { useState } from "react";
import "./Catalogue.css";
import CatalogueItem from "./catalogue_item/CatalogueItem";
import Filters from "./fiters/Filters";
import ShowMoreLessButton from "./show_more_less_button/ShowMoreLessButton";


const filterBySort = (sort) => {
    return gems.filter(gem => gem.sort === sort);
}

function RenderGems() {
    const [gems, setGems] = useState([
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
    ]);

    const allGems = gems.map(
        gem => <CatalogueItem {...gem} key={gem.id} />
    );

    const firstThreeGems = gems.slice(0, 3).map(
        gem => <CatalogueItem {...gem} key={gem.id} />
    );



    const findByName = (name) => {
        return gems.filter(gem => gem.uniqueName.search(name) !== -1);
    }

    return (
        <>
            <Filters />
            <ShowMoreLessButton allGems={allGems} firstThreeGems={firstThreeGems} />
        </>
    )
}

export default function Catalogue() {
    return (
        <section className="catalogue-section">
            <div className="catalogue-wrap">
                <div className="catalogue-div">
                    <RenderGems />
                </div>
            </div>
        </section>
    )
}