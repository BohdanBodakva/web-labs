import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./cart_item/CartItem";

function RenderGemsInCart(props) {
    return (
        props.gems.map(gem => <CartItem key={gem.id} gem={gem} />)        
    )
}


export default function Cart() {
    const gemsInCart = useSelector(state => state.gemsInCart);

    const [cartGems, setCartGems] = useState(gemsInCart);

    useEffect(() => {
        setCartGems(gemsInCart);
    }, [gemsInCart]);

    return (
        <>
            <div className="cart-t-div">
                <div className="cart-title">
                    <h1>It's your cart</h1>
                </div>
            </div>
            <section className="cart-section">
                {cartGems.length === 0 ? <div className="empty-cart">Cart is empty...</div> :
                    <RenderGemsInCart gems={cartGems} />}
            </section>
        </>
    )
}