import React, { useState } from "react";
import "./Filters.css";
import Select from "./selection/Selection";
import { GemsContext, gems } from "../../../context/catalogue_context/GemContext";
import CatalogueItem from "../catalogue_item/CatalogueItem";
import FindByName from "./find_by_name/FindByName";

function RenderGems(gems) {
    return (
        gems.gems.map(gem => <CatalogueItem key={gem.id} gem={gem}></CatalogueItem>)
    )
}

export default function Filter(props) {
    const [display, setDisplay] = useState(gems);

    return (
        <>
            <div className="m-div">
                <div className="l-c">
                    <div className="filter-div">
                        <div className="f-d">
                            <div className="filter">
                                <Select options={
                                    [
                                        { id: 1, name: 'all' },
                                        { id: 2, name: 'Diamond' },
                                        { id: 3, name: 'Emerald' },
                                        { id: 4, name: 'Ruby' },
                                        { id: 5, name: 'Sapphire' }
                                    ]
                                } handleChange={(e) => {
                                    setDisplay(gems.filter(gem => gem.sort === e.target.value));
                                    if (e.target.value === "all") {
                                        setDisplay(gems);
                                    }
                                }} />
                                <label>   Sort</label>
                            </div>
                            <div className="filter">
                                <Select options={
                                    [
                                        { id: 1, name: 'sort' },
                                        { id: 2, name: 'Ascending' },
                                        { id: 3, name: 'Descending' }
                                    ]
                                } handleChange={(e) => {
                                    if (e.target.value === "Ascending") {
                                        setDisplay([...display].sort((g1, g2) => {
                                            return g1.price - g2.price;
                                        }));
                                    }
                                    if (e.target.value === "Descending") {
                                        setDisplay([...display].sort((g1, g2) => {
                                            return g2.price - g1.price;
                                        }));
                                    }
                                }} />
                                <label>   Sort by price</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="r-c">
                    <div className="find-d">
                        <FindByName handleChange={(e) => {
                            setDisplay([...display].filter(gem => gem.uniqueName.toLowerCase().search(e.target.value.toLowerCase()) !== -1))
                        }} />
                    </div>
                    <div className="cancel-filters-button">
                        <button onClick={() => {
                            setDisplay(gems);
                        }}>Cancel filters</button>
                    </div>
                </div>
            </div>
            <div className="catalogue-div">
                <RenderGems gems={display} />
            </div>
        </>
    )
}