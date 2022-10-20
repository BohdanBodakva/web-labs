import React from "react";
import "./Selection.css";


export default function Select(props) {
    return (
        <select className="form-select" onChange={props.handleChange}>
            {props.options.map((option) => {
                return (
                    <option key={option.id} value={option.name}>{option.name}</option>
                )
            })}
        </select>
    )
}