import React from "react";
import "./FindByName.css";

export default function FindByName(props) {
    return (
        <div className="find-div">
            <input onChange={props.handleChange} onClick={props.clear} />
            <label>   Search</label>
        </div>
    )
}