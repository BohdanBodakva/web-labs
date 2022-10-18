import React, { useState } from "react";
import "./FindByName.css";

export default function FindByName(props) {
    const [enteredText, setEnterdText] = useState("");

    return (
        <div className="find-div">
            <input onChange={props.handleChange} onClick={props.clear} />
            <label>   Search</label>
        </div>
    )
}