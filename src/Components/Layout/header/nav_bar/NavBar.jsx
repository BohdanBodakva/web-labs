import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllGemsFromCartAction } from "../../../../redux_store/actions";
import { AuthContext } from "../../../../context/authentification_context/Auth";


export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { setIsAuthentificated } = useContext(AuthContext);

    const onSubmit = (props) => {
        dispatch(removeAllGemsFromCartAction());
        setIsAuthentificated(false);
        navigate("/log-in");
    }

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/"><b>Home</b></Link>
                </li>
                <li>
                    <Link to="/catalogue"><b>Catalogue</b></Link>
                </li>
                <li className="cart-l-i">
                    <Link to="/cart"><b>Cart</b></Link>
                </li>
                <li className="cart-l-i" onClick={onSubmit} >
                    <b className="sign-out-link">Sign Out</b>
                </li>
            </ul>
        </nav>
    )

}