import React from "react";
import { Link } from "react-router-dom";
import "./GemButtons.css";
import { useDispatch, useSelector } from "react-redux";
import { addGemToCartAction, removeGemFromCartAction } from "../../../redux_store/actions";

export default function GemButtons(props) {
    const dispatch = useDispatch();
    const gemsInCart = useSelector(state => state.gemsInCart);

    const addGemToCart = () => {
        dispatch(addGemToCartAction(props.gem));        
    }

    return (
        <div className="g-buttons">
            <div className="gem-buttons-div">
                <div className="g-b">
                    <button onClick={addGemToCart} className="buy-button-buttons">
                        Add to cart
                    </button>
                </div>
                <div className="g-b">
                    <Link to="/catalogue">
                        <button className="back-button-buttons">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}