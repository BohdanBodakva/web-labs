import React, { useState } from "react";
import "./FindByName.css";

export default function FindByName(props) {
    const [enteredText, setEnterdText] = useState("");



    const hC = (e) => {
        (() => props.searchGems(e.target.value))();
        setEnterdText(e.target.value);
    }

    const setText = () => {
        setEnterdText("");
    }

    return (
        <div className="find-div">
            <input className="c-input" type="text" onChange={hC} placeholder="Enter name" value={enteredText} />
            <button className="c-button" onClick={setText}>Clear</button>
        </div>
    )
}