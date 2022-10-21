import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

            {cartGems.length === 0 ? null :
                <div className="b-g-d">
                    <Link to="/buy-form">
                        <button className="buy-gems">buy</button>
                    </Link>
                </div>
            }

            <section className="cart-section">
                {cartGems.length === 0 ? <div className="empty-cart">Cart is empty...</div> :
                    <RenderGemsInCart gems={cartGems} />
                }
            </section>
        </>
    )
}