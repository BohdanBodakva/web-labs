import React, { useEffect, useState } from "react";
import "./CartItem.css";
import RemoveFromCart from "./remove_from_cart/RemoveFromCart";
import { useDispatch, useSelector } from "react-redux";
import { addGemToCartAction, removeGemFromCartAction } from "../../../redux_store/actions";

export default function CartItem(props) {
    const dispatch = useDispatch();
    const gemsInCart = useSelector(state => state.gemsInCart);

    const removeGemFromCart = () => {
        dispatch(removeGemFromCartAction(props.gem));
    }

    return (
        <div className="catalogue-item">
            <div className="c-i">
                <div className="item-image">
                    <img src={props.gem.imageUrl} alt="gems" />
                </div>
                <div className="item-title">
                    <h2>{props.gem.uniqueName}</h2>
                </div>
                <div className="item-text">
                    <p><b>Sort:</b> {props.gem.sort}</p>
                    <p><b>Price:</b> {props.gem.price} $</p>
                </div>
                <RemoveFromCart gem={props.gem} removeGem={removeGemFromCart} />
            </div>
        </div>
    )
}