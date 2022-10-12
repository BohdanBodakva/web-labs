import React from "react";
import "./Sort.css";
import Select from 'react-select';

export default function Sort() {
    const options = [
        { value: "nothing", label: "-----" },
        { value: "diamond", label: "Diamond" },
        { value: "sapphire", label: "Sapphire" },
        { value: "ruby", label: "Ruby" },
        { value: "emerald", label: "Emerald" }
    ]

    const handleChange = (selectedOption) => {
        
    }

    return (
        <Select id="select-sort" options={options} onChange={handleChange} />
    )
}