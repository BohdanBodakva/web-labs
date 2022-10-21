import React from "react";
import "./SocialMediaContacts.css";
import twitter from '../../../../assets/twitter.svg'
import facebook from '../../../../assets/facebook.svg'
import phone from '../../../../assets/phone.svg'

export default function SocialMediaContacts() {
    return (
        <div className="assets">
            <a href=""><img src={twitter} alt="twitter" /></a>
            <a href=""><img src={facebook} className="facebook-asset" alt="facebook" /></a>
            <a href=""><img src={phone} alt="phone" /></a>
        </div>
    )
}