import React from "react";
import "./Footer.css";
import footerGem from "../../../images/footerGem.png";
import SocialMediaContacts from "./social_media_contacts/SocialMediaContacts";

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
                        <SocialMediaContacts />
                        <div className="contact-us">
                            Contact us
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}