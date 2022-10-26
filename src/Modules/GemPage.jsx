import React from "react";
import { useParams } from "react-router-dom";
import Gem from "../Components/gem/Gem";

export default function GemPage() {
    const {id} = useParams();
    console.log("ID: ", id);

    return (
        <Gem id={id}></Gem>
    )
}                