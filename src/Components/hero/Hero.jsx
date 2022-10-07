import React from "react";
import "./Hero.css";
import ReadMore from "./read_more/ReadMore";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h2 className="sale-title">Sale 45%</h2>
                <p className="sale-text">
                    Buy two sets of gems and win sale up to 45% every day!
                </p><br />
                <ReadMore />
            </div>
        </section>
    )
}


