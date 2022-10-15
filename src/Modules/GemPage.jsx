import React from "react";
import { useParams } from "react-router-dom";
import Gem from "../Components/gem/Gem";

export default function GemPage() {
    const {id} = useParams();
    console.log(id);

    return (
        <Gem id={id}></Gem>
    )
}                