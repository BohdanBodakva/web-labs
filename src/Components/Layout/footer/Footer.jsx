import React from "react";
import "./Footer.css";
import footerGem from "../../../images/footerGem.png";
import twitter from '../../../assets/twitter.svg'
import facebook from '../../../assets/facebook.svg'
import phone from '../../../assets/phone.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-cont container">
                <div className="upper-footer">
                    <div className="left-div">
                        <img src={footerGem} alt="gem" />
                    </div>
                    <div className="right-div">
                        <b>ⓒ All rights reserved</b>
                    </div>
                </div>
                <hr />
                <div className="lower-footer">
                    <div className="central-div">
                        <div className="assets">
                            <img src={twitter} alt="twitter" />
                            <img src={facebook} className="facebook-asset" alt="facebook" />
                            <img src={phone} alt="phone" />
                        </div>
                        <div className="contact-us">
                            Contact us
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}