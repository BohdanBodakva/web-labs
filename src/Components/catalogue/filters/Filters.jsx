import React, { useState, useEffect, } from 'react';
import "./Filters.css";
import Select from "./selection/Selection";
import CatalogueItem from "../catalogue_item/CatalogueItem";
import FindByName from "./find_by_name/FindByName";
import { apiGetAll, apiGetAllWithSort } from "../../../api_requests/ApiGetAll";
import Loading from './loading_spinner/Loading';

export function RenderGems(props) {
    return (
        props.gems.map(gem => <CatalogueItem key={gem.id} gem={gem}></CatalogueItem>)
    )
}

export default function Filter() {
    const [gems, setGems] = useState([]);
    const [display, setDisplay] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiGetAll()
            .then((result) => {
                setGems(Object.values(result));
                setDisplay(Object.values(result));
            })
        setLoading(false);
    }, []);


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
                                    setLoading(true);
                                    if (e.target.value === "all") {
                                        setDisplay(gems);
                                    } else {
                                        apiGetAllWithSort(e.target.value).then((result) => {
                                            setDisplay(Object.values(result));
                                        })
                                    }
                                    setLoading(false);
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
                                    setLoading(true);
                                    if (e.target.value === "sort") {
                                        setDisplay(gems);
                                    } else if (e.target.value === "Ascending") {
                                        setDisplay([...display].sort((g1, g2) => { return g1.price - g2.price }));
                                    } else {
                                        setDisplay([...display].sort((g1, g2) => { return g2.price - g1.price }));
                                    }
                                    setLoading(false);
                                }} />
                                <label>   Sort by price</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="r-c">
                    <div className="find-d">
                        <FindByName searchGems={(value) => {
                            setLoading(true);
                            setDisplay([...display].filter(gem => gem.uniqueName.toLowerCase().search(value.toLowerCase()) !== -1))
                            setTimeout(() => setLoading(false), 300);
                        }} />
                    </div>
                    <div className="cancel-filters-button">
                        <button onClick={() => {
                            setLoading(true);
                            setDisplay([...gems]);
                            setLoading(false);
                        }}>Cancel filters</button>
                    </div>
                </div>
            </div>
            <div className="catalogue-div">
                {loading ? <Loading /> : <RenderGems gems={display} />}
            </div>
        </>
    )
}


